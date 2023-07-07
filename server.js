const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
 // apiKey: "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"
 apiKey: process.env.REACT_APP_OPENAIA_API_KEY
});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req,res) => {
 const {prompt} = req.body;

 const completion = await openai.createCompletion({
  model:"text-davinci-003",
  max_tokens: 512,
  temperature: 0,
  prompt: prompt,
 })
 res.send(completion.data.choices[0].text);
})

const portfinder = require('portfinder');

portfinder.getPort((err, port) => {
 if (err) {
  console.log(err)
 } else {
  app.listen(port, () => {
   console.log(`server started at http://127.0.0.1:${port}`)
   console.log(`server started at http://localhost:${port}`)
  })
 } 
})