import React, { Component } from "react";
import NewsItem from "./newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "General",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.props.setProgress(5);
    const { pageSize } = this.props;
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${pageSize}`;

    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        loading: false,
        totalResults: parsedData.totalResults,
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
    }    this.props.setProgress(100);

  };

  // handlePrevClick = async () => {
  //   this.setState(
  //     (prevState) => ({ page: prevState.page - 1 }),
  //     this.fetchNews
  //   );
  // };

  // handleNextClick = async () => {
  //   const { pageSize } = this.props;
  //   const { page, totalResults } = this.state;
  //   if (page + 1 > Math.ceil(totalResults / pageSize)) return;

  //   this.setState(
  //     (prevState) => ({ page: prevState.page + 1 }),
  //     this.fetchNews
  //   );
  // };

  fetchData = () => {
    this.fetchNews();
  };

  render() {
    const { articles, loading, totalResults } = this.state;
    const { pageSize } = this.props;

    return (
      <>
        <h1 className="text-center my-4">
          News Today - Top {this.props.category} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No more articles to load</b>
            </p>
          }
        >
          <div className="container">
            <div className="row">
              {articles.map((element, index) => (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    sources={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
     
        </>
         );
  }
}
