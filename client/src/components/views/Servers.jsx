import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";

import Header from "../layout/Header"
import Server from "../server/Server";

class Servers extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Server />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Servers;