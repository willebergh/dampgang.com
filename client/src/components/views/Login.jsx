import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import logo from "../../logo.png";
import Theme from "../layout/Theme";
import LoginForm from "../forms/LoginForm";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
        }
    }

    componentWillMount() {
        console.log(this.props.history)
        if (localStorage.getItem("token")) console.log("token")
        else console.log("no token")
    }

    onSuccess(data) {
        console.log(data)
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <div className="login-wrapper" >
                {this.state.redirect ? <Redirect to="/" /> : null}
                <div style={{}}>
                    <img src={logo} alt="logo" style={{ width: 100, display: "block", margin: "16px auto" }} />
                </div>
                <Theme>
                    <LoginForm onSuccess={this.onSuccess.bind(this)} />
                </Theme>
            </div >
        );
    }
}

export default Login;