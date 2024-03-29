// const INITIAL_STATE = {
//     isLightStar: false,

// }


// export default function starReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case 'SET_STAR_STATE':
//             return {
//                 isLightStar: action.payload
//             }
//         default:
//             return state
//     }

// }
const INITIAL_STATE = {
    favItems: [],
    count: 0,
};

export default function favouritReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_FAVOURIT":
            return {
                ...state,
                favItems: [...state.favItems, action.payload],
                count: state.count + 1
            };
        case "REMOVE_FAVOURIT":
            return {
                ...state,
                // favItems: state.favItems.splice(action.payload, 1),
                favItems: state.favItems.filter((movie) => movie !== action.payload),
                count: state.count - 1
            };
        default:
            return state;
    }
}