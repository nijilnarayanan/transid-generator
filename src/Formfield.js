import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
      }

  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form className="form-container">
        <label>
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label>
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="password" required/>
        <button onClick={this.handleClick}>Login</button>
      </form>
    );
  }
}
export default Form;
