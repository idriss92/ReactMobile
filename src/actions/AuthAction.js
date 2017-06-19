import { Actions } from 'react-native-router-flux';
import * as types from './types';
import { signIn, logIn } from '../api';


// export const selectAlbum = (title) => {
//     return {
//         type: 'select_allbum',
//         payload: title
//     };
// };

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    };
};


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_USER });
        logIn(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                signIn(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: types.LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main2();
};
