import React, { useState } from "react";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);



 
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route  path="/General" element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={5} country="in" category="General" />} />
          <Route  path="/Business" element={<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={5} country="in" category="Business" />} />
          <Route  path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />
          <Route  path="/Health" element={<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={5} country="in" category="Health" />} />
          <Route  path="/Sports" element={<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={5} country="in" category="Sports" />} />
          <Route  path="/Technology" element={<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={5} country="in" category="Technology" />} />
        </Routes>
      </Router>
    );
  
}
export default App;