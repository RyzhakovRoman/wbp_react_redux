import React from 'react';
import Footer from './Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';


class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('App component');
        console.log(props);
    }
    render() {
        return (
            <div>
                {/*<AddTodo />*/}
                <VisibleTodoList />
                {/*<Footer />*/}
            </div>
        )
    }
}

export default App;