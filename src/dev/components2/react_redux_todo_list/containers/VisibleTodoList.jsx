import {connect} from 'react-redux';
import {toggleTodo} from '../actions/index';
import TodoList from '../TodoList';

function getVisibleTodos(todos, filter = 'SHOW_ALL') {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
    }
}

function mapStateToProps(state) {
    console.log('map State To Props Visible Todo List');
    console.log(state);

    return {
        todos: getVisibleTodos(state.todosReducer, state.visibilityFilterReducer)
    }
}

function mapDispatchToProps(dispatch) {
    // console.log('map Dispatch To Props Visible Todo List');
    // console.log(dispatch);
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;