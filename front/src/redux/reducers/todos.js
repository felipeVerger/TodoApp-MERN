const initialState = {
    todos: [],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    theme: false,
    todosCompleted: [],
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return {
                ...state,
                todos: action.payload,
            };
        case "CREATE_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload),
            }
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => todo._id === action.payload._id ? action.payload : todo),
            }
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.payload,
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                // Add all the completed task to the array and check if the task is already completed or not
                todosCompleted: state.todosCompleted.some((todo) => todo._id === action.payload._id) ? state.todosCompleted.filter((todo) => todo._id !== action.payload._id) : [...state.todosCompleted, action.payload],
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todosCompleted: [],
            }
        default:
            return state;
    }
}