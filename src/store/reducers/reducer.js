
const INITIAL_STATE = {
    movieList: [],
    movieDetails: {}
}
export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_MOVIES_LIST':
            return { ...state, movieList: action.payload }
        case "GET_MOVIE_DETAILS":
            return { ...state, movieDetails: action.payload };
        default:
            return state;
    }
}