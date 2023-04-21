import React, { Component } from "react";
import "./ClassForm.css";

export class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const suscriber = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(suscriber);
  };
  render() {
    return (
      <div className="form">
        <h1>Class Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="text">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name..."
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email..."
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ClassForm;
