import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
    state = {}
    render() {
        return (
            <div className="landing-wrapper">
                <h1 className="text-light text-center header">DampGang</h1>
                <div className="landing-nav">
                    <Link className="text-light" to="/members">Members</Link>
                    <Link className="text-light" to="/servers">Servers</Link>
                </div>
            </div>
        );
    }
}

export default Landing;