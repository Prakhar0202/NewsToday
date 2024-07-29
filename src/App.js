import React, { Component } from "react";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pageSize= 5;
apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }


  render() {
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route  path="/General" element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={5} country="in" category="General" />} />
          <Route  path="/Business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Business" pageSize={5} country="in" category="Business" />} />
          <Route  path="/Entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />
          <Route  path="/Health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Health" pageSize={5} country="in" category="Health" />} />
          <Route  path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pageSize={5} country="in" category="Sports" />} />
          <Route  path="/Technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Technology" pageSize={5} country="in" category="Technology" />} />
        </Routes>
      </Router>
    );
  }
}
