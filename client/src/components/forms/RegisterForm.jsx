import React, { Component } from 'react';
import { FormControl, FormHelperText, InputLabel, Input, InputAdornment, Button } from "@material-ui/core";
import { Check, Close } from '@material-ui/icons';

class RegisterForm extends Component {
    constructor() {
        super();

        this.state = {
            username: {
                error: false,
                focus: false,
                icon: false,
                value: ""
            },
            email: {
                error: false,
                focus: false,
                feedback: "",
                icon: false,
                value: "",
            },
            password: {
                error: false,
                focus: false,
                icon: false,
                value: ""
            },
            passwordRepeat: {
                error: false,
                focus: false,
                feedback: "",
                icon: false,
                value: ""
            },
        }
    }

    handleChange = e => {
        // Update field values
        this.setState({
            [e.target.name]: { ...this.state[e.target.name], value: e.target.value }
        })
    }

    handleFocus = e => {
        // Clear errors
        this.setState({
            [e.target.name]: { ...this.state[e.target.name], error: false, focus: true, feedback: "", icon: false }
        })
    }

    handleBlur = e => {
        if (e.target.value === "") {
            this.setState({
                [e.target.name]: { ...this.state[e.target.name], error: true, focus: false, icon: true, feedback: "This field can't be empty" }
            })
        } else {
            this.setState({
                [e.target.name]: { ...this.state[e.target.name], icon: true }
            })
        }
    }

    handleEmailChange = e => {
        var re = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            this.setState({
                [e.target.name]: { value: e.target.value, error: true, icon: true, feedback: "Please enter a valid email" }
            })
        } else {
            this.setState({
                [e.target.name]: { value: e.target.value, error: false, icon: true, feedback: "" }
            })
        }
        if (e.target.value === "") {
            this.setState({
                [e.target.name]: { value: e.target.value, error: true, icon: true, feedback: "This field can't be empty" }
            })
        }
    }

    handlePasswordChange = e => {
        const password = this.state.password;
        if (e.target.value !== password.value) {
            this.setState({
                [e.target.name]: { ...this.state[e.target.name], value: e.target.value, error: true, icon: true, feedback: "Passwords has to match" }
            })
        } else {
            this.setState({
                [e.target.name]: { value: e.target.value, error: false, icon: true, feedback: "" }
            })
        }
        if (e.target.value === "") {
            this.setState({
                [e.target.name]: { value: e.target.value, error: true, icon: true, feedback: "This field can't be empty" }
            })
        }
    }

    isButtonDisabled() {
        let valid = 0;
        let invalid = 0;
        for (let field of Object.values(this.state)) {
            field.value === "" || field.error || !field.icon ? invalid++ : valid++
        }
        return invalid === 0 ? false : true
    }


    onSubmit = e => {
        e.preventDefault();
    }

    render() {
        const { username, email, password, passwordRepeat } = this.state;
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
                        onBlur={this.handleBlur}
                        endAdornment={
                            <InputAdornment position="start">
                                {!username.icon ? null : username.error ? <Close color="error" /> : <Check />}
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>
                        {username.feedback}
                    </FormHelperText>
                </FormControl>


                <FormControl fullWidth error={email.error}>
                    <InputLabel>Email</InputLabel>
                    <Input
                        type="text"
                        name="email"
                        value={email.value}
                        onChange={this.handleEmailChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        endAdornment={
                            <InputAdornment position="start">
                                {!email.icon ? null : email.error ? <Close color="error" /> : <Check />}
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>
                        {email.feedback}
                    </FormHelperText>
                </FormControl>


                <FormControl fullWidth error={password.error}>
                    <InputLabel>Password</InputLabel>
                    <Input
                        type="password"
                        name="password"
                        value={password.value}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        endAdornment={
                            <InputAdornment position="start">
                                {!password.icon ? null : password.error ? <Close color="error" /> : <Check />}
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>
                        {password.feedback}
                    </FormHelperText>
                </FormControl>


                <FormControl fullWidth error={passwordRepeat.error}>
                    <InputLabel>Repeat Password</InputLabel>
                    <Input
                        type="password"
                        name="passwordRepeat"
                        value={passwordRepeat.value}
                        onChange={this.handlePasswordChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        endAdornment={
                            <InputAdornment position="start">
                                {!passwordRepeat.icon ? null : passwordRepeat.error ? <Close color="error" /> : <Check />}
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>
                        {passwordRepeat.feedback}
                    </FormHelperText>
                </FormControl>

                <FormControl fullWidth className="mt-1">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={this.isButtonDisabled()}
                    >
                        Register
                    </Button>
                </FormControl>

            </form>
        );
    }
}

export default RegisterForm;