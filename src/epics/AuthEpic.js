import { Observable } from 'rxjs/Observable';
import * as types from '../actions/types';
import { login, signIn } from '../api';

export const loginEpic = action$ => {
    action$.ofType(types.LOGIN_USER)
        
        // .mergeMap(action => 
        //     Observable.fromPromise(login)
        //         .map(response => console.log(response))
        //         .catch(error => Observable.of(console.log(error)))
        // );
};


export const signInEpic = action$ => {
    action$.ofType(types.SIGNIN_USER)
        // .mergeMap(action => 
        //     Observable.fromPromise(signIn)
        //         .map(response => console.log(response))
        //         .catch(error => Observable.of(console.log(error)))
        // );
};
