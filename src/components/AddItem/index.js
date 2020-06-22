import React, { createRef } from 'react';
import cross from "../../assets/cross.svg";
import add from "../../assets/addBtn.svg";
import ColumnsStore from "../../stores/ColumnsStore";

import "./AddItem.css";

export default class AddItem extends React.Component {

    state = {
        addItem: false,
        cardText: ''
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onCLickOutsideHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onCLickOutsideHandler);
    }

    wrapper = createRef();
    myRef = createRef();

    onCLickOutsideHandler = (e) => {
        if (this.wrapper.current && !this.wrapper.current.contains(e.target)) {
            console.log(this.wrapper, this.wrapper.current);
            this.onClickCrossHandler();
            console.log(e.target);
        }
    }

    onClickCrossHandler = () => {
        this.setState({addItem: false, cardText: ''});
    }

    onClickAddHandler = () => {
        this.setState({addItem: true}, () => { this.myRef.current.focus() });
    }

    onChangeTextArea = (e) => {
        this.setState({cardText: e.currentTarget.value});
    }
    
    render() {
        const empty = this.props.empty;
        const text = this.state.cardText;
        const index = this.props.index;
        return this.state.addItem ? (
            <div ref={this.wrapper} className={empty ? "add-item empty" : "add-item"} >
                <div className="text-area">
                    <textarea
                        rows="2" 
                        placeholder={empty ? "Введите название колонки" : "Введите название карточки"} 
                        onChange={this.onChangeTextArea} 
                        value={this.state.cardText} 
                        ref={this.myRef}
                    />
                </div>
                <div className="add-item__bottom">
                    <button 
                        onClick={
                            empty ? 
                            () => {ColumnsStore.addColumn(text); this.onClickCrossHandler()} : 
                            () => {ColumnsStore.addCard(text, index); this.onClickCrossHandler()}
                        }
                    >
                        {empty ? "Добавить колонку" : "Добавить карточку"}
                    </button>
                    <img src={cross} onClick={this.onClickCrossHandler} alt="close form" />
                </div>
            </div> 
        ) : (
            <div className="column__bottom" onClick={this.onClickAddHandler}>
                <img src={add} alt="add item" />
                <span>{empty ? "Добавить еще одну колонку" : "Добавить еще одну карточку"}</span>
            </div>
        )
        
    }
} 