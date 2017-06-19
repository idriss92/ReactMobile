export default (state = null, action) => {
    switch (action.type) {
        case 'selectAlbum':
            return action.payload;
        default:
            return state;
    }
};
