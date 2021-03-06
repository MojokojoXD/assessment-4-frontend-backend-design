const express = require("express");
const controller = require('./controller')
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes",controller.randomFortune);
app.get('/api/mood/:mood', controller.moodResponse);
app.post('/api/email',controller.storeEmail);
app.delete('/api/email',controller.deleteAllEmails);

app.listen(4000, () => console.log("Server running on 4000"));
