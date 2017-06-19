import { combineEpics } from 'redux-observable';
import { loginUserEpic } from './AuthEpic';

export const rootEpic = combineEpics({
    authEpic: loginUserEpic
});
