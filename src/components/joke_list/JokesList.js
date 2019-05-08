import React from "react";
import jokes from "./jokes.json.js";

const JokesList = () => {
  return jokes.map(joke => {
    if (joke.question) {
      <blockquote>{joke.question}</blockquote>;
    }
    <cite>{joke.punchLine}</cite>;
  });
};

export default JokesList;
