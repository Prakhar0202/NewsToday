import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, sources } = props;
  return (
    <div>
      <div className="card my-3">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-info">{sources}</span>
        </div>
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
          <p className="card-text">
            <small>
              By <b>{!author ? "Unknown" : author}</b> on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
