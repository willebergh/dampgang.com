import React, { Component } from 'react';

class ServerModal extends Component {
    constructor() {
        super();
        this.state = {
            title: "title",
            desc: "desc",
            platform: "platform",
            address: "address",
        }
    }
    render() {
        const { title, desc, platform, address } = this.state
        return (
            <div className="text-light">
                <h1>{title}</h1>
                <p>{desc}</p>
                <ul>
                    <li>{platform}</li>
                    <li>{address}</li>
                </ul>
            </div>
        );
    }
}

export default ServerModal;