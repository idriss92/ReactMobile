import firebase from 'firebase';

export const logIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};
