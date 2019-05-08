import React from "react";
import jokes from "./jokes.json";

const Joke = props => (
  <>
    <p>Question: {props.question}</p>
    <cite style={{ color: !props.question && "#f00" }}>
      Punchline: {props.punchLine}
    </cite>
    <hr />
  </>
);

const JokesList = () => {
  let filtered_jokes = [];

  jokes.forEach((joke, idx) => {
    if (joke.question && joke.question.length > 50) {
      filtered_jokes.push(
        <Joke
          key={`joke${idx}`}
          question={joke.question}
          punchLine={joke.punchLine}
        />
      );
    }
  });

  return <>{filtered_jokes}</>;
};

export default JokesList;
