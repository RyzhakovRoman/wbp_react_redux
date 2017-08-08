let nextTodoId = 4;

export const addTodo = (text, completed) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};