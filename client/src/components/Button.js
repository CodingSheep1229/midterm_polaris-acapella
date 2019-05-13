import React, { Component } from 'react';
import './components.css';

class NavButton extends Component {
    render() {
        return(
            <span className='NavButton'>
                { this.props.text }
            
            </span>
            
        );
    }
}

export default NavButton;