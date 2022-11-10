import * as api from '../../api';

// Action Creators

export const getTodos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTodos();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createTodo = (todo) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(todo);
        dispatch({ type: 'CREATE_TODO', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id);
        dispatch({ type: 'DELETE_TODO', payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const updateTodo = (id, todo) => async (dispatch) => {
    try {
        const { data } = await api.updateTodo(id, todo);
        dispatch({ type: 'UPDATE_TODO', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const changeTheme = (theme) => {
    return {
        type: 'CHANGE_THEME',
        payload: theme,
    }
}

export const toggleCompleted = (todo) => {
    return {
        type: 'TOGGLE_COMPLETED',
        payload: todo,
    }
}

export const clearCompleted = () => {
    return {
        type: 'CLEAR_COMPLETED',
    }
}