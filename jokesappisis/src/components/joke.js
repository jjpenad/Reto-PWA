import { useEffect, useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("joke") === null) {
        setJoke("Loading...");
      } else {
        setJoke(localStorage.getItem("joke"));
      }
    }

    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=23ff8988cbade81d9f4b9e25069f539a&hash=00de9a8f19b12510a7edb83b4a52d448"
    )
      .then((result) => result.json())
      .then((result) => {
        setJoke(result.results);
        console.log("Result", result.data);
      });
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
