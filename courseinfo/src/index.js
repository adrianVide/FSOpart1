import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part parts={props} />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      {props.parts.parts.map((e) => (
        <p>
          {e.name} {e.exercises}
        </p>
      ))}
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce(function (prev, curr) {
        return prev + curr.exercises;
      }, 0)}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
