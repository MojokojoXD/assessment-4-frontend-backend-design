const fortuneButton = document.getElementById('get-fortune');
const mood = document.querySelectorAll('.mood');
const submitEmail = document.querySelector('#email-form');
const newsletter = document.getElementById('newsletter1');
const deleteEmails = document.getElementById('remove-emails');




function getFortunes(){
    axios.get("http://localhost:4000/api/fortunes").then((res) =>{
        console.log(res.data)
        const list = document.createElement('li');
        const unordList = document.querySelector('ul')
        unordList.innerHTML = "";
        list.textContent = res.data;
        unordList.appendChild(list);
    }).catch((err) => console.log(err));
}

function getMood(event){
   axios.get(`http://localhost:4000/api/mood/${event.target.value}`).then((res) =>{
       const img = document.querySelector('img');
      if (event.target.value === 'Great'){
          img.src = res.data.good;
      }
      else{
        img.src = res.data.bad;
      }
    })
}

function getSubmitDetails(event){
    event.preventDefault();
    body = {
        email: newsletter.value,
    }
    axios.post('http://localhost:4000/api/email').then((res) => {
    document.querySelector('span').textContent = res.data;
    }).catch((err) => {console.log(err)})
}

function wipeEmails()
{
    alert("Are you sure");
    axios.delete('http://localhost:4000/api/email').then((res) => {
        document.getElementById('confirmation').textContent = res.data;
    }).catch((err) => console.log(err))
}



fortuneButton.addEventListener('click', getFortunes);

for(let i = 0; i < mood.length; i++)
{
    mood[i].addEventListener('click',getMood);
}

submitEmail.addEventListener('submit',getSubmitDetails);
deleteEmails.addEventListener('click',wipeEmails)