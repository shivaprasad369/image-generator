import { useState } from "react";
import "../App.css";
import { OpenAI } from "openai";
import.meta.env.VITE_OPENAI_KEY;
// const configuration=new Configuration({
//   apiKey:import.meta.env.VITE_OPENAI_KEY,
// })
//const MY_API_KEY=`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`
import styled from "styled-components";
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});



export default function TextGenerator() {
    
      const [loading, setLoading] = useState(false);
      const [prompt, setPrompt] = useState("");
        const [text,setText]=useState('')
      async function fetchData() {
        try {
          setLoading(true);
          const res = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        });
          setText(res.choices[0].message.content);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <Container>
    <h2> Text Generator</h2>
    <div className="container">
     
        <input
          type="text"
          name="enter name"
          placeholder="Enter value"
          disabled={loading}
          onChange={(e) => setPrompt(e.target.value)}
        />
    
      <button onClick={fetchData}>Search</button>
    </div>
    <div className="text">

    {!loading ? (
    // <img src={image} alt="images" />): (
      <p >{text}</p>): (
     <><p>Loading...</p><br/><h5>Please wait</h5></>
    )}
    </div>
  </Container>

  )
}

const Container = styled.div`
  background-color: #373737;
  width: 100vw;
  color: white;
  padding-top: 0.5rem;
  height: 100vh;
  margin: 0;
  gap: 2rem;
  .container {
    gap: 1rem;
    input {
      border: none;
      width: 22rem;
      height: 2rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 1rem;
      padding-left: 0.5rem;
      border-radius: 0.3rem;
      margin-right: 1rem;
    }
    button {
      height: 2rem;
      color: white;
      background-color: red;
      padding-bottom: 0.6rem;
      padding: 0;
      margin: 0;
      width: 3.8rem;
    }
  }
  .text {
    justify-content:center;
    margin-left:2%;
    padding-top: 1rem;
    gap: 1rem;
    padding:2rem;
    height:20rem;
    border-radius: 0.6rem;
    width:90vw;
    background-color:rgba(0,0,0,0.3)

  }
  @media only screen and (max-width: 768px) {
.container {
  width:100%;
  padding:1rem;
  input{
    width:85%;
    margin-bottom:1rem;
 height:3rem;
  }
  button{
    width:50%;
    border:none;
    height:2.3rem;
    font-size:1rem;
    border-radius:0.3rem;
    margin-right:2rem;
  }
}
.text{
  width:78%;
}
  }
`;


