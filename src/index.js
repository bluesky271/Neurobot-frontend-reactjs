import React from "react";
import { render } from "react-dom";

import { LoginForm } from "./components/LoginForm"
import { RegisterForm } from "./components/RegisterForm"

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-12">
        <h2 className="form-signin-heading">Join Neurobot</h2>
        </div>
          <div className="col-md-6">
            <LoginForm />
          </div>
          <div className="col-md-6">
            <RegisterForm />
          </div>
        </div>
      </div>
    )
  }
}
render(<App/>, window.document.getElementById("app"));
