import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme, TextField, Fab, Button } from "@material-ui/core"
import { Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../../logo.png";

class Register extends Component {
    constructor() {
        super();

        this.state = {

            username: {
                valid: true,
                value: ""
            },
            email: {
                valid: true,
                value: ""
            },
            password: {
                valid: true,
                value: ""
            },
            passwordRepeat: {
                valid: true,
                value: ""
            }

        }
    }

    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }));

    theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: grey[50]
            }
        },
    });

    onChange = async e => {
        this.setState({
            [e.target.name]: { ...this.state[e.target.name], value: e.target.value }
        });
    }

    handleBlur = e => {
        if (this.state[e.target.name].value === "") {
            return this.setState({
                [e.target.name]: { ...this.state[e.target.name], valid: false }
            });
        } else {
            return this.setState({
                [e.target.name]: { ...this.state[e.target.name], valid: true }
            });
        }
    };

    onSubmit() {

    }

    renderRedirect() {
        if (this.state.redirect) return <Redirect to="/" />
    }

    render() {

        const username = this.state.username.value;
        const email = this.state.email.value;
        const password = this.state.password.value;
        const passwordRepeat = this.state.passwordRepeat.value;

        return (
            <div className="login-wrapper">
                {this.renderRedirect()}
                <div style={{}}>
                    <img src={logo} alt="logo" style={{ width: 100, display: "block", margin: "16px auto" }} />
                </div>
                <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                    <ThemeProvider theme={this.theme}>
                        <Form.Group>
                            <TextField
                                type="text"
                                name="username"
                                label="Username"
                                value={username}
                                onChange={this.onChange}
                                onBlur={this.handleBlur}
                                fullWidth
                            />
                            <TextField
                                type="text"
                                name="email"
                                label="Email"
                                value={email}
                                onChange={this.onChange}
                                onBlur={this.handleBlur}
                                fullWidth
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                type="password"
                                name="password"
                                label="Password"
                                value={password}
                                onChange={this.onChange}
                                onBlur={this.handleBlur}
                                fullWidth
                            />
                            <TextField
                                type="password"
                                name="passwordRepeat"
                                label="Repeat Password"
                                value={passwordRepeat}
                                onChange={this.onChange}
                                onBlur={this.handleBlur}
                                fullWidth
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" variant="contained" color="primary" style={{ display: "block", width: "100%" }}>
                                Register
                        </Button>
                        </Form.Group>
                    </ThemeProvider>
                </form>
            </div>
        );
    }
}

export default Register;