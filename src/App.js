import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress:0
  }
  updateProgress=(progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <NavBar/>
        <Routes>
        <Route exact path="/" element = {<News updateProgress = {this.updateProgress} key="general" pageSize={10} country="in" category="general"/>}></Route>
        <Route exact path="/business" element = {<News updateProgress = {this.updateProgress} key="business" pageSize={10} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment"element = {<News updateProgress = {this.updateProgress} key="entertainment" pageSize={10} country="in" category="entertainment"/>}></Route>
        <Route exact path="/general" element = {<News updateProgress = {this.updateProgress} key="general" pageSize={10} country="in" category="general"/>}></Route>
        <Route exact path="/health" element = {<News updateProgress = {this.updateProgress} key="health" pageSize={10} country="in" category="health"/>} ></Route>
        <Route exact path="/science" element = {<News updateProgress = {this.updateProgress} key="science" pageSize={10} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element = {<News updateProgress = {this.updateProgress} key="sports" pageSize={10} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element = {<News updateProgress = {this.updateProgress} key="technology" pageSize={10} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
