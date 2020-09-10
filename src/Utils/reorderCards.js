export default function(result, ColumnsStore) {
    const { destination, source } = result;

    if (!destination)
        return;

    if (destination.droppableId === source.droppableId && destination.index === source.index)
        return;

    const sourceColIndex = parseInt(source.droppableId.replace('col', ''));
    const destColIndex = parseInt(destination.droppableId.replace('col', ''));

    ColumnsStore.columns = ColumnsStore.columns.map((column, colIndex) => {
        if (destColIndex === colIndex) {
            const card = ColumnsStore.columns[sourceColIndex].cards.splice(source.index, 1);
            const newCards = Array.from(column.cards);
            newCards.splice(destination.index, 0, card);
            column.cards = newCards;
        }
        return column;
    });
}
