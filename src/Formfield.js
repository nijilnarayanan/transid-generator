import React, { Component } from "react";
import "./Form.css";
import { loginApi } from "./Apiconfig";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {};
    this.onEmailEdit= this.onEmailEdit.bind(this);
    this.onPasswordEdit= this.onPasswordEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    axios.post(loginApi, {
        strEmail: this.state.email,
        strPassword: this.state.password,
        userDetail: null
      })
      .then(response => {
        console.log(response.data.BookMyShow.strData)
        const udCookie = JSON.stringify(response.data.BookMyShow.strData[0]);
        document.cookie = `ud=${encodeURIComponent(udCookie)}`;
      });
  }

  onEmailEdit(event) {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordEdit(event) {
    this.setState({
      password: event.target.value
    });
  }

  
  render() {
    return (
      <form className="form-container">
        <label>
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" onChange={this.onEmailEdit} required />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password" placeholder="Enter Password" name="password"  onChange={this.onPasswordEdit} required />
        <button onClick={this.handleClick}>Login</button>
      </form>
    );
  }
}
export default Form;
