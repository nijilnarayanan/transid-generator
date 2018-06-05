import React, { Component } from "react";
import './Login.css'
import Form  from './Formfield'

class LoginContainer extends Component {
  render() {
    return (
      <div className="Login-container">
        <h1 className="login">Login</h1>
        <div className="env">
        <div className = "dev"><h2>DEV</h2>
        <Form />
        </div>
        <div className = "SIT"><h2>SIT</h2>
        <Form />
        </div>
        <div className = "Preprod"><h2>Preprod</h2>
        <Form />
        </div>
        </div>
        </div>
      
    );
  }
}

export default LoginContainer;
