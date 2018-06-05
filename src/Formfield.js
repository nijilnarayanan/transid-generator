import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
        <form className="form-container">
        <label><b>Email </b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label><b>Password </b></label>
      <input type="password" placeholder="Enter Password" name="password" required />
      <button type="submit">Login</button>
    </form>
    );
  }
}
export default Form;
