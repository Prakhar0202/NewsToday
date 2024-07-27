import React, { Component } from "react";
import NewsItem from "./newsitem";
import Spinner from "./spinner";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true, // Set loading to true initially
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { pageSize } = this.props;
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e80d4749f6a4adf9bf5585b464e5a06&page=${page}&pageSize=${pageSize}`;

    this.setState({ loading: true });

    const response = await fetch(url);
    const parsedData = await response.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews
    );
  };

  handleNextClick = async () => {
    const { pageSize } = this.props;
    const { page, totalResults } = this.state;
    if (page + 1 > Math.ceil(totalResults / pageSize)) return;

    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    const { articles, loading, page, totalResults } = this.state;
    const { pageSize } = this.props;

    if (loading) {
      return <Spinner />; // Show the spinner while data is being fetched
    }

    return (
      <div className="container my-4">
        <h1 className="text-center my-4">News Today - Top Headlines</h1>
        <div className="row">
          {articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title || ""}
                description={element.description || ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-info"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={page + 1 > Math.ceil(totalResults / pageSize)}
            className="btn btn-info"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
