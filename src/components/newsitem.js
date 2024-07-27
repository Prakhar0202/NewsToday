import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-3" >
          <img
            src={
              !imageUrl
                ? "https://yt3.googleusercontent.com/KuzjC-19PA7AeblvdaER34WXYQbUq6ex55KfMHMTF9qGN6WdKmbEnDy1VBIvqJVoIFAh0ytpMA=s160-c-k-c0x00ffffff-no-rj"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
