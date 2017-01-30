import React from "react";

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rememberMeChecked: true
    };

    this.handleRememberMe = this.handleRememberMe.bind(this);
  }

  handleRememberMe() {
    this.setState({
      rememberMeChecked: !this.state.rememberMeChecked
    })
  }

  render() {
    return (
        <form className="form-signin">
          <h2 className="form-signin-heading">Already a member? Welcome back!</h2>
          <h5 className="form-signin-subheading">Enter your log in details below</h5>
          <h6 className="form-signin-subheading">Fields marked * are mandatory.</h6>
            <input className="form-control" placeholder="Email*"/>
            <input className="form-control" placeholder="Password*"/>
            <label>
              <input type="checkbox" checked={this.state.rememberMeChecked} onChange={this.handleRememberMe}/>
              Remember me.
            </label>
            <div></div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
            <a href="#">Forgot password?</a>
        </form>
    );
  }
}
