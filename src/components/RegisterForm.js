import React from "react";
import { CountryDropdown } from "react-country-region-selector";

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
          initialLink: "Click to enter your address details.",
          cancelLink: "Cancel.",
          country: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      selectCountry(countryName) {
        this.setState({country: countryName});
      }

    render() {
        let link = null;
        if (this.state.isToggleOn) {link = this.state.initialLink;}
        else {link = this.state.cancelLink;}

        return (
            <form className="form-signin">
                <h2 className="form-signin-heading">Become a member. Welcome to NeuroBot!</h2>
                <h5 className="form-signin-subheading">Enter your email address below to get started.</h5>
                <h6 className="form-signin-subheading">Fields marked * are mandatory.</h6>
                <select id="title" className="form-control" required>
                  <option className="select-option" label="Title" value>Title</option>
                  <option className="select-option" label="Mrs" value="mrs">Mrs</option>
                  <option className="select-option" label="Miss" value="miss">Miss</option>
                  <option className="select-option" label="Ms" value="ms">Ms</option>
                  <option className="select-option" label="Mr" value="mr">Mr</option>
                </select>
                    <input type="text" className="form-control" placeholder="First Name*" required/>
                    <input type="text" className="form-control" placeholder="Last Name*" required/>
                    <input type="email" className="form-control" placeholder="Email*" required/>
                    <input type="password" className="form-control" placeholder="Password*" required/>
                    <h6 className="form-signin-subheading">New password must have a minimum 8 characters including 1 uppercase and 1 numeric.
</h6>
                    <input type="password" className="form-control" placeholder="Confirm Password*" required/>
                    <a onClick={this.handleClick}>{link}</a>
                    {this.state.isToggleOn ? "" :
                        <div>
                          <h2 className="form-signin-heading">Add your address details.</h2>
                          <input type="tel" className="form-control" placeholder="Telephone number"/>
                          <input type="text" className="form-control" placeholder="Company"/>
                          <CountryDropdown value={this.state.country} onChange={(countryName) => this.selectCountry(countryName)} />
                          <input type="text" className="form-control" placeholder="Please enter an address."/>
                          <input type="text" className="form-control" placeholder="Address1 (e.g. street number and street name)*"/>
                          <input type="text" className="form-control" placeholder="Address2 (optional)"/>
                          <input type="text" className="form-control" placeholder="City*" required/>
                          <input type="text" className="form-control" placeholder="Postal code*" required/>
                        </div>
                    }
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Join Neurobot</button>
            </form>
        );
    }
}
