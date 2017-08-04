import React from 'react';

class Link extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <a href="#"
               onClick={(e)=>{
                   e.preventDefault();
                   this.props.onClick()}
               }>{this.props.children}</a>
        )
    }
}

export default Link;