import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        console.log('Add Todo Constructor');
        console.log(props)
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.refs.inp.value.trim()) {  return  }
        this.props.dispatch(addTodo(this.refs.inp.value, this.refs.completed.checked));
        this.refs.inp.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input ref="inp" type="text"/>
                    <input ref="completed" type="checkbox"/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;