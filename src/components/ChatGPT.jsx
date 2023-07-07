import React, { useState } from "react";
import axios from "axios";

const ChatGPT = () => {
 const [prompt, setPrompt] = useState('');
 const [response, setResponse] = useState('');
 const HTTP="http://localhost:8000/chat";

 const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(`${HTTP}`, { prompt }).then((res)=>setResponse(res.data)).catch((err) => {
   console.log(err);
  })
 }

 const handlePrompt = (e) => {
  setPrompt(e.target.value)
 };

 return (
  <div>
   <div>ChatGPT</div>
   <form action="" onSubmit={handleSubmit}>
    <div>
     <label htmlFor="">Ask Questions</label>
     <input
      type="text"
      placeholder="Enter text"
      value={prompt}
      onChange={handlePrompt}
      />
    </div>
   </form>

   <div>
    {prompt ? response ? response : "Ask me anything..." : "Ask me anything..."}
   </div>
  </div>
 );
}

export default ChatGPT;