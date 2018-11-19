const initState = {
    projects: [],
};

export const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.error('Create Project Error', action.error);
            return state;
        default:
            return state;
    }
};
