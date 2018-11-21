import React, { Component } from 'react';
import './CSS/Item.css';

class Item extends Component {
    render() {
        const { text, id, onToggle, onRemove, check } = this.props;
        return(
            <div className="text-box" onClick={() => (onToggle(id))} >
                <div className="remove-button" onClick={(e) => {e.stopPropagation(); onRemove(id)}}>&times;</div>
                <div className={`todo-text ${check && 'check'}`}>
                    <div>{text}</div>
                </div>
                {
                    check && <div className="check-button">O</div>
                } 
            </div>
        );
    }
}

export default Item;