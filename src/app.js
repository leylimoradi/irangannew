import { hot } from "react-hot-loader";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import homeworkData from "./data/homework-data.json";
import ArticlesList from "./homework-1/articles-list";
import EmployeesTable from "./homework-2/employees-table";
import TheExam from "./exam/the-exam";

const INIT_DATA = {
  homeworkData,
  trelloBoard: {
    columns: []
  }
};

function reducer(state = INIT_DATA, action) {
  switch (action.type) {
    case "CREATE_COLUMN":
      const {
        trelloBoard: { columns }
      } = state;
      const { id, title } = action;
      return {
        ...state,
        trelloBoard: {
          columns: [
            ...columns,
            {
              id,
              title,
              cards: []
            }
          ]
        }
      };

    case "INIT_HOMEWORK":
      return state.homeworkData;
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <Router>
      <div id="page">
        <header>
          <h1>React and Redux Homeworddddk</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Homework 1</Link>
              </li>
              <li>
                <Link to="/employees-table">Homework 2</Link>
              </li>
              <li>
                <Link to="/the-exam">The Exam</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/#articles" component={ArticlesList} />
          <Route path="/employees-table" component={EmployeesTable} />
          <Route path="/the-exam" component={TheExam} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <main>
      <h2>Hello World!</h2>
    </main>
  );
};

const ProviderWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default hot(module)(ProviderWrapper);
