import React, { Component } from "react";
import NewsItem from "./newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true, // Set loading to true initially
      page : 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=4e80d4749f6a4adf9bf5585b464e5a06&page=1";
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults}); // Update loading state to false once data is fetched
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false }); // Ensure loading is set to false in case of an error
    }
  }

handlePrevClick=async()=>{
 
  let url =
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=4e80d4749f6a4adf9bf5585b464e5a06&page=${this.state.page - 1}&pageSize=20`;
try {
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles, loading: false }); // Update loading state to false once data is fetched
} catch (error) {
  console.error("Error fetching news:", error);
  this.setState({ loading: false }); // Ensure loading is set to false in case of an error
}
  this.setState({
    page:this.state.page - 1,
    // articles: parsedData.articles
  })
  
}
handleNextClick=async()=>{
  if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

  }
  else{
  let url =
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=4e80d4749f6a4adf9bf5585b464e5a06&page=${this.state.page + 1}&pageSize=20`;
try {
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles, loading: false }); // Update loading state to false once data is fetched
} catch (error) {
  console.error("Error fetching news:", error);
  this.setState({ loading: false }); // Ensure loading is set to false in case of an error
}
  this.setState({
    page:this.state.page + 1,
    // articles: parsedData.articles
  })
  }
}

  render() {
    const { articles, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
      <div className="container my-4">
        <h1 className="text-center">News Today - Top Headlines</h1>
        <div className="row">
          {/* {articles.length === 0 ? (
            <div>No articles found</div> // Show a message if no articles are found
          ) : */}
          {
           (
            articles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          )}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>


        </div>

  
      </div>
    );
  }
}
