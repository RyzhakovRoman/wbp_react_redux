import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log('Todo list');
        console.log(props);
    }
    checking(array) {
        console.log("чет есть");
        return array.map(todo =>
            <Todo key={todo.id} {...todo} onClick={()=>this.props.onTodoClick(todo.id)} />
        )
    }
    render() {
        return (
            <ul>
                {
                    this.checking(this.props.todos)
                }
            </ul>
        )
    }
}

export default TodoList;