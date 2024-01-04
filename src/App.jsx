import { useState } from "react";
import "./App.css";
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

function App() {
  const [image, setImage] = useState(
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-fxLALSECaVFTBkm9k6BkXxlX/user-5skyQFJ4qotRfJtoVn7YHvdM/img-NuTqRpPl1N0laThWUodHuNnj.png?st=2024-01-04T08%3A47%3A23Z&se=2024-01-04T10%3A47%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-04T05%3A09%3A29Z&ske=2024-01-05T05%3A09%3A29Z&sks=b&skv=2021-08-06&sig=mEcRcLfV3BCuRd%2BwMgg9uQObXZMtnxtqn6Scp%2BJqmYc%3D"
  );
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  console.log();
  async function fetchData() {
    try {
      setLoading(true);
      const res = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
//      console.log(res.data[0].url);
      setImage(res.data[0].url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <h2> Image Generator</h2>
      <div className="container">
       
          <input
            type="text"
            name="enter name"
            placeholder="Enter value"
            disabled={loading}
            onChange={(e) => setPrompt(e.target.value)}
          />
      
        <button onClick={fetchData}>get</button>
      </div>
      {!loading ? (
      <img src={image} alt="images" />): (
        <p>Loading...</p>
      )}
    </Container>
  );
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
  img {
    padding-top: 1rem;
    gap: 1rem;
    height: 27rem;
    border-radius: 0.6rem;
    width:50vw;
  }
`;

export default App;
