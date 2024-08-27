import React, {useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews= async()=> {
    props.updateProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    props.updateProgress(20);
    let data = await fetch(url);
    let parseData = await data.json();
    props.updateProgress(60);
    setArticles({articles: parseData.articles});
    setTotalResults({totalResults: parseData.totalResults});
    setLoading({loading: false});

    props.updateProgress(100);
  }

  useEffect(() => {
    updateNews();
    document.title = `NewsPasta - ${capitalizeFirstLetter( props.category)}`;
  });
  
 

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage({ page: page + 1 });
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles({articles: articles.concat(parseData.articles)});
    setTotalResults({totalResults: parseData.totalResults});
  };

    return (
      <>
        <h1 className="text-center my-2">
          NewsPasta - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container" >
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={Math.random()}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      sourceName={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
};
News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;