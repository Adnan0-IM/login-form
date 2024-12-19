import React, { useState } from "react";
import Input from "./Input";

const Form = (props) => {
  const [myStyle, setMyStyle] = useState();
  const over = () => {
    setMyStyle({
      backgroundColor: "black",
    });
  };

  const out = () => {
    setMyStyle({
      backgroundColor: "white",
    });
  };
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const [HeadingText, setHeading] = useState("");

  const submit = (event) => {
    setHeading(name);


    event.preventDefault();
  };

  return (
    <form onSubmit={submit} className="form">
      <h1>Hello {HeadingText}</h1>
      <Input
        onChange={changeName}
        value={name}
        type="text"
        placeholder="Username"
      />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button
        style={myStyle}
        onMouseOver={over}
        onMouseOut={out}
        type="submit"
      >
        {props.isRegistered ? "Login" : "Register"}{" "}
      </button>
    </form>
  );
};
export default Form;
