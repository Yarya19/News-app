import React from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, sourceName } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%"}}>
                {sourceName}
              </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {author ? `By ${author}` : `By Unknown`} on{" "}
                {new Date(date).toDateString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
