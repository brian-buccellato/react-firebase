export const signIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch(e => {
                dispatch({ type: 'LOGIN_ERROR', e });
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' });
            });
    };
};

export const signUp = user => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                return firestore
                    .collection('users')
                    .doc(res.user.uid)
                    .set({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        initials: `${user.firstName[0]}${user.lastName[0]}`,
                    });
            })
            .then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' });
            })
            .catch(e => {
                dispatch({ type: 'SIGNUP_ERROR', e });
            });
    };
};
