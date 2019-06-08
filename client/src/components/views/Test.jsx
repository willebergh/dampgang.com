import React, { Component } from 'react';
import Theme from "../layout/Theme";
import RegisterFrom from "../forms/RegisterForm";

class Test extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {

        return (
            <div className="login-wrapper">
                <Theme>
                    <RegisterFrom />
                </Theme>
            </div>
        );
    }
}

export default Test;