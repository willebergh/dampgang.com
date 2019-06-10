import React, { Component } from 'react';
import { FormControl, FormHelperText, InputLabel, Input, InputAdornment, Button } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import axios from "axios"

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: {
                value: "",
                error: false,
                isEmpty: false
            },
            password: {
                value: "",
                error: false,
                isEmpty: false
            },

            feedback: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: { ...this.state[e.target.name], value: e.target.value }
        })
    }

    handleFocus = e => {
        this.setState({
            [e.target.name]: { ...this.state[e.target.name], error: false }
        })
    }

    checkErrors() {
        const { username, password } = this.state;
        return username.error || password.error ? true : false
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        if (username.value === "" || password.value === "") {
            this.setState({
                username: { ...username, error: true },
                password: { ...password, error: true },
                feedback: "All fields required."
            })
        } else {
            const creds = { username: username.value, password: password.value };
            this.postSubmit(creds)
        }
    }

    postSubmit(creds) {
        axios.post(`http://localhost:5000/api/auth`, creds)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.onSuccess("hello");
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    username: { value: "", error: true },
                    password: { value: "", error: true }
                })
            })
    }

    render() {
        const { username, password, feedback } = this.state;
        return (
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>


                <FormControl fullWidth error={username.error}>
                    <InputLabel>Username</InputLabel>
                    <Input
                        type="text"
                        name="username"
                        value={username.value}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        endAdornment={
                            <InputAdornment position="end">
                                {username.error ? <Close color="error" /> : <span />}
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <FormControl fullWidth error={password.error}>
                    <InputLabel>Password</InputLabel>
                    <Input
                        type="password"
                        name="password"
                        value={password.value}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        endAdornment={
                            <InputAdornment position="end">
                                {password.error ? <Close color="error" /> : <span />}
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormHelperText error={this.checkErrors()}>
                    {this.checkErrors() ? feedback : null}
                </FormHelperText>

                <FormControl fullWidth className="mt-1">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </FormControl>


            </form >
        );
    }
}

export default LoginForm;