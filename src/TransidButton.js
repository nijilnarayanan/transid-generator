import React, { Component } from 'react';
import './TransidButton.css'

class TransidButton extends Component {

handleClick(e){
e.preventDefault();
}
  render() {
    return (
        <div>
                <button className='button' onClick={this.handleClick}>Generate Transaction ID</button>
        </div>
    );
  }
}

export default TransidButton;