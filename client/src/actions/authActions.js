import {
    CHECKING_AUTH,
    CHECKED_AUTH
} from "./types";

import axios from "axios";

export const checkAuth = callback => dispatch => {
    dispatch({ type: CHECKING_AUTH });

    axios.get("http://localhost:5000/api/auth/check")
        .then(res => {
            dispatch({
                type: CHECKED_AUTH,
                payload: true
            })
        })
        .catch(err => {
            dispatch({
                type: CHECKED_AUTH,
                payload: false
            })
        })
}