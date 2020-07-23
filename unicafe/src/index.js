import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  return (
    <>
      <Display value={props.good} text={"Good"} />
      <Display value={props.neutral} text={"Neutral"} />
      <Display value={props.bad} text={"Bad"} />
      <Display value={props.good + props.bad + props.neutral} text={"All"} />
      <Display
        value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}
        text={"Average"}
      />
      <Display
        value={props.good / (props.good + props.neutral + props.bad) + " %"}
        text={"Positive"}
      />
    </>
  );
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
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
