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
        <table>
          <tbody>
            <Statistic value={good} text={"Good"} />
            <Statistic value={neutral} text={"Neutral"} />
            <Statistic value={bad} text={"Bad"} />
            <Statistic value={good + bad + neutral} text={"All"} />
            <Statistic
              value={((good - bad) / (good + neutral + bad)).toFixed(1)}
              text={"Average"}
            />
            <Statistic
              value={((good / (good + neutral + bad)) * 100).toFixed(1) + " %"}
              text={"Positive"}
            />
          </tbody>
        </table>
      </>
    );
  }
};

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
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
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} buttonText={"Good"} />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        buttonText={"Neutral"}
      />
      <Button handleClick={() => setBad(bad + 1)} buttonText={"Bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
