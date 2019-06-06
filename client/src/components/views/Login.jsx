import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { lightBlue, grey } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme, TextField, Fab, Button } from "@material-ui/core"
import { Container, Form } from "react-bootstrap";
import logo from "../../logo.png";

class Login extends Component {
    constructor() {
        super()
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

    render() {
        return (
            <div className={this.useStyles.root} className="login-wrapper">
                <div style={{  }}>
                    <img src={logo} alt="logo" style={{ width: 100, display: "block", margin: "16px auto" }} />
                </div>
                <form noValidate autoComplete="off">
                    <ThemeProvider theme={this.theme}>
                        <Form.Group>
                            <TextField
                                label="Username"
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label="Password"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="contained" color="primary" style={{ display: "block", width: "100%" }}>
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