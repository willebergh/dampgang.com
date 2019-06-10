import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const StyledLoadingBar = withStyles({
    colorPrimary: {
        backgroundColor: "#000"
    },
    barColorPrimary: {
        backgroundColor: "#fff"
    }
})(LinearProgress)

export default function LoadingBar() {
    return (
        <StyledLoadingBar />
    );
}