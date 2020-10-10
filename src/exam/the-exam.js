import React from "react";
import { connect } from "react-redux";
import TrelloBoard from "./trello-board";

const TheExam = props => {
  const { columns, createColumn } = props;

  return (
    <main className="full-width">
      <h2>The Exam</h2>
      <TrelloBoard columns={columns} createColumn={createColumn} />
    </main>
  );
};

function mapStateToProps(state) {
  return {
    columns: state.trelloBoard.columns
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createColumn(id, title) {
      const createColumn = {
        type: "CREATE_COLUMN",
        id,
        title
      };

      dispatch(createColumn);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheExam);
