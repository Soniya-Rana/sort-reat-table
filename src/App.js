import React, { useState, useEffect } from "react";
import "./App.css";

import Articles from "./Articles";
// import 'h8k-components';

const title = "Sorting Articles";

function App({ articles }) {
  const [articleData, setArticleData] = useState(articles);
  const [sortKey, setSortKey] = useState(null);

  useEffect(() => {
    let sortByKey = [...articleData];
    sortByKey.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) {
        return -1;
      } else if (a[sortKey] < b[sortKey]) {
        return 1;
      }
      return 0;
    });
    setArticleData(sortByKey);
    // console.log(sortByKey);
  }, [sortKey]);

  useEffect(() => {
    let sortByUpvote = [...articles];
    sortByUpvote.sort((a, b) => {
      if (a["upvotes"] > b["upvotes"]) {
        return -1;
      } else if (a["upvotes"] < b["upvotes"]) {
        return 1;
      }
      return 0;
    });
    setArticleData(sortByUpvote);
  }, []);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          onClick={() => setSortKey("upvotes")}
          data-testid="most-upvoted-link"
          className="small"
        >
          Most Upvoted
        </button>
        <button
          onClick={() => setSortKey("date")}
          data-testid="most-recent-link"
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articleData} />
    </div>
  );
}

export default App;
