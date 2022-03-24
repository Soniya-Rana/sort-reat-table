import React, { Component } from "react";
import "./App.css";
import ArticlesClass from "./ArticlesClass";

const title = "Sorting Articles";

export default class AppClass extends Component {
  state = {
    sortKey: null,
    articlesArray: [],
  };

  componentDidMount() {
    this.setState({
      articlesArray: this.props.articles,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortKey !== this.state.sortKey) {
      let sortByKey = [...this.state.articlesArray];
      sortByKey.sort((a, b) => {
        if (a[this.state.sortKey] > b[this.state.sortKey]) {
          return -1;
        } else if (a[this.state.sortKey] < b[this.state.sortKey]) {
          return 1;
        }
        return 0;
      });
      this.setState({
        articlesArray: sortByKey,
      });
      console.log(sortByKey);
      // Now fetch the new data here.
    }
  }

  render() {
    return (
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            onClick={() => this.setState({ sortKey: "upvotes" })}
            data-testid="most-upvoted-link"
            className="small"
          >
            Most Upvoted
          </button>
          <button
            onClick={() => this.setState({ sortKey: "date" })}
            data-testid="most-recent-link"
            className="small"
          >
            Most Recent
          </button>
        </div>
        <ArticlesClass articles={this.state.articlesArray} />
      </div>
    );
  }
}
