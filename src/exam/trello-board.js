import React from "react";
import BoardColumn from "./board-column";
import CreateColumn from "./create-column";

const TrelloBoard = props => {
  const { columns, createColumn } = props;
  console.log(`columns`, columns);

  return (
    <section id="trello_board">
      <header>
        <h3>Trello Board</h3>
        <small>{columns.length} columns</small>
      </header>
      {columns.map(column => (
        <BoardColumn title={column.title} key={column.id} />
      ))}
      {columns.length < 4 ? <CreateColumn createColumn={createColumn} /> : null}
    </section>
  );
};

export default TrelloBoard;
