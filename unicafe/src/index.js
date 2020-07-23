import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = (props) => (
  <div>
    {props.buttonText} {props.value}
  </div>
);

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.buttonText}</button>;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} buttonText={"Good"} />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        buttonText={"Neutral"}
      />
      <Button handleClick={() => setBad(bad + 1)} buttonText={"Bad"} />
      <h2>Statistics</h2>
      <Display value={good} buttonText={"Good"} />
      <Display value={neutral} buttonText={"Neutral"} />
      <Display value={bad} buttonText={"Bad"} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
