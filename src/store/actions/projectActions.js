export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to db
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        fireStore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: uid,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project });
            })
            .catch(e => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', e });
            });
    };
};
