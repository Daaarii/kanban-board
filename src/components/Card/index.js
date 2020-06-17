import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import "./Card.css";
// import { reaction } from 'mobx';

export default class Card extends React.Component {
    render() {
        return (
            <Draggable draggableId={`${this.props.colIndex}${this.props.index}`} index={this.props.index}>
                {(provided, snapshot) => (
                    <div 
                        className="card" 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef} 
                     >
                        {this.props.children}
                    </div>
                )}
            </Draggable>
        )
    }
}