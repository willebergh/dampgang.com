import React, { Component } from 'react';
import { makeStyles, createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

class Theme extends Component {
    constructor(props) {
        super(props);
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
            <ThemeProvider theme={this.theme}>
                {this.props.children}
            </ThemeProvider>
        );
    }
}

export default Theme;