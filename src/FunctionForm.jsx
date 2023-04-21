import React, { useState } from "react";
import "./FunctionForm.css"

const FunctionForm = () => {
  const [info, setInfo] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ info });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Function Form</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={info.name || ""}
        placeholder="name"
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={info.email || ""}
        placeholder="email"
        onChange={handleChange}
        required
      />

      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={info.password || ""}
        placeholder="password"
        onChange={handleChange}
        required
      />

      <br />
      <input type="submit" value="Sbmit" />
    </form>
  );
};

export default FunctionForm;
