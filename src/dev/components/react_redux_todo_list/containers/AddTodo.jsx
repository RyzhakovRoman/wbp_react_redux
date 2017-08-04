import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        if (!this.refs.inp.value.trim()) {
            return
        }
        dispatch(addTodo(this.refs.inp.value));
        this.refs.inp.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input ref="inp" type="text"/>
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