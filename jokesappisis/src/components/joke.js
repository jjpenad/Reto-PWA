import { useEffect, useState } from "react";

const Joke = () => {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("joke") === null) {
        setJokes("Loading...");
      } else {
        setJokes(localStorage.getItem("joke"));
      }
    }

    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=23ff8988cbade81d9f4b9e25069f539a&hash=00de9a8f19b12510a7edb83b4a52d448"
    )
      .then((result) => result.json())
      .then((result) => {
        setJokes(result.data.results);
        console.log("Result", result.data.results);
      });
  }, []);

  return (
    <div>
      <h1>Marvel Universe</h1>
      <p>
        {Array.isArray(jokes) &&
          jokes.map((j) => (
            <div>
              <h2>{j.name}</h2>
              <img
                alt='img'
                src={j.thumbnail.path + "." + j.thumbnail.extension}
                width='50%'
                height='auto'
              />
            </div>
          ))}
      </p>
    </div>
  );
};

export default Joke;
