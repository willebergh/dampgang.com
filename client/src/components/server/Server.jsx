import React, { Component } from 'react';
import { Container, Col } from "react-bootstrap";

import Banner from "./Banner"
import Modal from "./Modal"

class Server extends Component {
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
            <Col className="border border-light rounded" lg={{ span: 8, offset: 2 }}>
            </Col>
        );
    }
}

export default Server;