import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar loaderSpeed={500} waitingTime={1000} shadow={true} height={5} color='#FFB900' progress={this.state.progress} />
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"general"} pageSize={this.pageSize} country='in' category="general" />} />
            <Route exact path="/business" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"business"} pageSize={this.pageSize} country='in' category="business" />} />
            <Route exact path="/entertainment" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"entertainment"} pageSize={this.pageSize} country='in' category="entertainment" />} />
            <Route exact path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"general1"} pageSize={this.pageSize} country='in' category="general" />} />
            <Route exact path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"health"} pageSize={this.pageSize} country='in' category="health" />} />
            <Route exact path="/science" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"science"} pageSize={this.pageSize} country='in' category="science" />} />
            <Route exact path="/sport" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"sport"} pageSize={this.pageSize} country='in' category="sport" />} />
            <Route exact path="/technology" element={<News apikey={this.apikey} setProgress={this.setProgress} key={"technology"} pageSize={this.pageSize} country='in' category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
