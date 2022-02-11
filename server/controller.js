
const fortuneArr = ["It’s time to get moving. Your spirits will lift accordingly","Keep your face to the sunshine and you will never see shadows.",
                        "Let the world be filled with tranquility and goodwill.","Like the river flow into the sea. Something are just meant to be.",
                    "Listen not to vain words of empty tongue."]
const moodArr = [
    {
        good: "https://i.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.webp",
        bad: "https://cdn-0.therandomvibez.com/wp-content/uploads/2020/11/Memes-To-Make-Someone-Smile.jpg"
    },
    {
        good: "https://media4.giphy.com/media/Q81NcsY6YxK7jxnr4v/giphy.gif?cid=ecf05e47od44hnkv8blzpo5jbitea5dty6y5yu45skfsx152&rid=giphy.gif&ct=g",
        bad: "https://media0.giphy.com/media/xUPGcDUNKnqM0BwNRm/giphy.gif?cid=ecf05e475irz0g59bume4q9ih5jpbktlajnfur837n959t5i&rid=giphy.gif&ct=g"
    }
]

let emailList = [];

module.exports = {
    randomFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortuneArr.length);
        res.status(200).send(fortuneArr[randomIndex]);
    },
    moodResponse: (req,res) => {
        let randomIndex = Math.floor(Math.random() * moodArr.length);
        res.status(200).send(moodArr[randomIndex]);
    },
    storeEmail: (req,res) => {
        emailList.push(req.body);
        res.status(200).send("Welcome friend!");
    },
    deleteAllEmails: (req,res) => {
        emailList = [];
        res.status(200).send("All emails are gone");
    }
}