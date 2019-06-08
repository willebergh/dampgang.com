import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Theme from "../layout/Theme";
import RegisterForm from "../forms/RegisterForm";
import logo from "../../logo.png";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false
        }

    }

    renderRedirect() {
        if (this.state.redirect) return <Redirect to="/" />
    }

    render() {
        return (
            <div className="login-wrapper">
                {this.renderRedirect()}
                <div style={{}}>
                    <img src={logo} alt="logo" style={{ width: 100, display: "block", margin: "16px auto" }} />
                </div>
                <Theme>
                    <RegisterForm />
                </Theme>
            </div>
        );
    }
}

export default Register;