import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { lightBlue, grey } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme, TextField, Fab, Button } from "@material-ui/core"
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../../logo.png";

class Login extends Component {
    constructor() {
        super()

        this.state = {
            redirect: false,
            username: "",
            password: "",
            invalid: false
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

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const creds = {
            username: this.state.username,
            password: this.state.password
        }

        if (creds.username === "" || creds.password === "") {
            this.setState({ invalid: true })
        } else {
            this.postSubmit(creds)
        }
    }


    postSubmit(creds) {
        axios.post(`http://localhost:5000/api/auth`, creds)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState({ redirect: true })
            })
            .catch(err => console.log(err))
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            < div className={this.useStyles.root} className="login-wrapper" >
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
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                type="password"
                                name="password"
                                label="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" variant="contained" color="primary" style={{ display: "block", width: "100%" }}>
                                Login
                        </Button>
                        </Form.Group>
                    </ThemeProvider>
                </form>
            </div >
        );
    }
}

export default Login;