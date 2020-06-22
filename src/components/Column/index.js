import React from 'react';
import { observer } from 'mobx-react';

import { Card, AddItem } from "../index";
import ColumnsStore from '../../stores/ColumnsStore';
import cross from '../../assets/cross.svg'

import "./Column.css";

@observer
class Column extends React.Component {

    render() {
        const provided = this.props.provided;
        const colIndex = this.props.colIndex;
        return (
            <div className="column"> 
                    <div className="column-title">
                        <span>{this.props.title}</span>
                        <div className="delete-column" onClick={() => ColumnsStore.deleteColumn(colIndex)} >
                            <img src={cross} alt="Удалить колонку" />
                        </div>
                    </div>
                    <div className="column-items" {...provided.droppableProps} ref={provided.innerRef}>
                        {this.props.cards.map((text, index) => 
                            <Card key={index} index={index} colIndex={colIndex}>
                                {text}
                                <div className="delete-card" onClick={() => ColumnsStore.deleteCard(colIndex, index)} >
                                    <img src={cross} alt="удалить карточку" />
                                </div>
                            </Card>)
                        }
                        {provided.placeholder}
                    </div>
                    <AddItem index={this.props.index} />
                </div>
        )
    }
}

export default Column;