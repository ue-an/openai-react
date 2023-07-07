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
  <div className="text-gray-600 bg-primary flex flex-col items-center">
   <div className=" flex flex-col items-center w-full max-w-[1080px]">
   <div className=" pt-6 font-bold text-3xl flex justify-center">ChatGPT Clone</div>
   <div className=" px-12 w-full h-[calc(100vh-20vh)]">
     {response ? response : "Ask me anything..."}
   </div>

   <div className=" rounded-tl-lg rounded-tr-lg bg-slate-400 py-6 px-6 w-full sticky inset-x-0 bottom-0">
    <div className=" w-full">
      <form className=" gap-6 flex w-full" action="" onSubmit={handleSubmit}>
        <input
         className=" rounded-lg px-3 w-full"
         type="text"
         placeholder="Enter question"
         value={prompt}
         onChange={handlePrompt}
         />
         <button className=" rounded-md py-1 px-3 text-white bg-slate-600" type="submit">
          Go
         </button>
      </form>
     </div>
   </div>
   </div>
  </div>
 );
}

export default ChatGPT;