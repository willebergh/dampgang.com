import {
    CHECK_AUTH,
    CHECKING_AUTH,
    CHECKED_AUTH
} from "../actions/types";

const initialState = {
    loading: false,
    isAuthenticated: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case CHECKING_AUTH:
            return {
                ...state,
                loading: true
            }

        case CHECKED_AUTH:
            return {
                ...state,
                loading: false,
                isAuthenticated: action.payload
            }

        default:
            return state;
    }
}
