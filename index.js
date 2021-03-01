import React from "react";
import ReactDOM from "react-dom";
import Joke from "./components/Joke";
import Button from "./components/Button";

const App = () => {
  const [joke, setJoke] = React.useState("");

  React.useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    const response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: { Accept: "application/json" },
    });

    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <main>
      <Joke content={joke} />
      <Button handleClick={fetchJoke} />
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
