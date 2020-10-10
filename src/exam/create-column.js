import React from "react";

class CreateColumn extends React.Component {
  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onCreate = this.onCreate.bind(this);

    this.state = {
      formShown: false,
      newColumnTitle: ""
    };
  }

  showForm() {
    this.setState({ formShown: true });
  }
  hideForm() {
    this.setState({ formShown: false });
  }

  handleChange({ target }) {
    this.setState({
      newColumnTitle: target.value
    });
  }
  onCreate(ev) {
    ev.preventDefault();

    this.props.createColumn(
      Math.floor(Math.random() * 256) + 1,
      this.state.newColumnTitle
    );
  }

  render() {
    return (
      <section className="board-column">
        <h4>New column</h4>
        <button onClick={this.showForm}>Create</button>
        <div
          className={`form-container ${this.state.formShown ? "show" : "hide"}`}
        >
          <form onSubmit={this.onCreate}>
            <label htmlFor="column_title">Column title</label>
            <input
              type="text"
              id="column_title"
              placeholder="Enter title"
              autoFocus
              onChange={this.handleChange}
              value={this.state.newColumnTitle}
            />
            <input type="submit" value="Create" />
          </form>
          <button className="hide-form" onClick={this.hideForm} />
        </div>
      </section>
    );
  }
}

export default CreateColumn;
