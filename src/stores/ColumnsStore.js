import { observable, action } from "mobx";


class ColumnsStore {

    @observable
    columns = [
        {
            title: "План на месяц",
            cards: [
                "1",
                "3",
                "1",
                "2",
                "3",
            ]
        },
        {
            title: "План на год",
            cards: [
                "15",
                "20",
                "30"
            ]
        }
    ];

    @action
    addCard = (text, colIndex) => {
        if (text === '')
            return;
        this.columns[colIndex].cards.push(text);
    }

    @action
    addColumn = (name) => {
        this.columns.push({title: name, cards: []});
    }

    @action
    deleteCard = (colIndex, cardIndex) => {
        if (window.confirm("Удалить карточку?"))
            this.columns[colIndex].cards.splice(cardIndex, 1);
        
    }

    @action
    deleteColumn = (colIndex) => {
        if (window.confirm("Удалить колонку?"))
            this.columns.splice(colIndex, 1);
    }


}

export default new ColumnsStore(); 