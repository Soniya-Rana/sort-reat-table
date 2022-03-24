import React, { Component } from "react";

export default class ArticlesClass extends Component {
  render() {
    return (
      <div className="card w-50 mx-auto">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Upvotes</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.articles.map((article, idx) => {
              return (
                <tr data-testid="article" key={idx}>
                  <td data-testid="article-title">{article.title}</td>
                  <td data-testid="article-upvotes">{article.upvotes}</td>
                  <td data-testid="article-date">{article.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
