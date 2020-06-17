import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { AddItem, Column } from "../index";

class ColumnDroppable extends React.Component {

    render() {
        const colIndex = this.props.index;
        return this.props.cards ? (
            <Droppable droppableId={`col${colIndex}`}>
            {provided => (
                <Column colIndex={colIndex} provided={provided} cards={this.props.cards} title={this.props.title} index={this.props.index} />
            )}
            </Droppable>
        ) : (
            <div className="column">
                <AddItem empty />
            </div> 
        )     
    }
}

export default ColumnDroppable;