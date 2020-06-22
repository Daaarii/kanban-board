import React from 'react';
import { observer } from 'mobx-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { ColumnDroppable } from "../index";
import ColumnsStore from "../../stores/ColumnsStore";
import reorderCards from "../../Utils/reorderCards";

import "./KanbanBoard.css";

@observer
class KanbanBoard extends React.Component {
    
    render() {
        return (
            <div className="kanban-board">
                <DragDropContext onDragEnd={result => reorderCards(result, ColumnsStore)}>    
                    {ColumnsStore.columns.map((column, index) => <ColumnDroppable key={index} index={index} {...column} />)}
                    <ColumnDroppable />
                </DragDropContext>
            </div>
        )
    }
}

export default  KanbanBoard;