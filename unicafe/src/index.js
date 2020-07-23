import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h2>Statistics</h2>

        <div>No feedback to show</div>
      </>
    );
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <Display value={good} text={"Good"} />
        <Display value={neutral} text={"Neutral"} />
        <Display value={bad} text={"Bad"} />
        <Display value={good + bad + neutral} text={"All"} />
        <Display
          value={(good - bad) / (good + neutral + bad)}
          text={"Average"}
        />
        <Display
          value={good / (good + neutral + bad) + " %"}
          text={"Positive"}
        />
      </>
    );
  }
};

const Display = (props) => (
  <div>
    {props.text} {props.value}
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
