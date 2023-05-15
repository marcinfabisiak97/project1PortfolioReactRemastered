import { useState, useEffect } from "react";
import axios from "axios";
const randomJokeApi = "https://api.chucknorris.io/jokes/random";
const JokePart = () => {
  const [joke, setJoke] = useState();
  const randomJokeGenerator = async () => {
    try {
      const resp = await axios.get(randomJokeApi);
      setJoke(resp.data.value);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    randomJokeGenerator();
  }, []);
  return (
    <section className="jokePart">
      <h2>Joke Generator which uses Axios</h2>
      <p>{joke}</p>
      <button onClick={() => randomJokeGenerator()}>New Joke</button>
    </section>
  );
};

export default JokePart;
