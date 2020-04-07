import { combineReducers } from 'redux'
import {
    // ADD_TODO,
    // TOGGLE_TODO,
    // SET_VISIBILITY_FILTER,
    // VisibilityFilters
    SET_USER,
    SET_IS_AUTHENTICATED
} from './actions'
// const {
//     SHOW_ALL
// } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter
//         default:
//             return state
//     }
// }

// function todos(state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if (index === action.index) {
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     })
//                 }
//                 return todo
//             })
//         default:
//             return state
//     }
// }
const initialState = {
    user: {
        username: '',
    },
    isAuthenticated: false,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            // debugger
            return { ...state,  user: action.user }
        case SET_IS_AUTHENTICATED:
            return { ...state,  isAuthenticated: action.isAuthenticated }
        default:
            return state
    }
}

const combinedReducers = combineReducers({
    // visibilityFilter,
    // todos
    userReducer
})

export default combinedReducers;
