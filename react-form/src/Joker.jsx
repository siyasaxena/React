import { useState, useEffect } from "react";
export default function Joker() {
  //   let [joke, setJoke] = useState("");
  //   const URL = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

  //   const getNewJoke = async () => {
  //     let response = await fetch(URL);
  //     let jsonresponse = await response.json();
  //     console.log(jsonresponse);
  //     setJoke(jsonresponse.joke);
  //   };

  const URL = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  let [joke, setJoke] = useState("");

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    setJoke(jsonresponse.joke);
  };

  useEffect(() => {
    async function getFirstJoke(event) {
      let response = await fetch(URL);
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      setJoke(jsonresponse.joke);
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <button onClick={getNewJoke}>Get new joke</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>{joke}</p>
    </div>
  );
}
