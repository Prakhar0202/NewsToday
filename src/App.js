import React, { Component } from "react";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="/General" element={<News key="General" pageSize={5} country="in" category="General" />} />
          <Route  path="/Business" element={<News key="Business" pageSize={5} country="in" category="Business" />} />
          <Route  path="/Entertainment" element={<News key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />
          <Route  path="/Health" element={<News key="Health" pageSize={5} country="in" category="Health" />} />
          <Route  path="/Sports" element={<News key="Sports" pageSize={5} country="in" category="Sports" />} />
          <Route  path="/Technology" element={<News key="Technology" pageSize={5} country="in" category="Technology" />} />
        </Routes>
      </Router>
    );
  }
}
