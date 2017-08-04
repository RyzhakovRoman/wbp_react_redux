import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        console.log('Todo');
        console.log(props);
    }
    render() {
        return (
            <li onClick={this.props.onClick}>
                {this.props.text} --- <span>{this.props.completed ? 'Завершена' : 'В работе'}</span>
            </li>
        )
    }
}

export default Todo;