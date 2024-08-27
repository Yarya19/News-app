import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(0);
  const updateProgress=(progress)=>{
    setProgress({
      progress: progress
    })
  }

    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <NavBar/>
        <Routes>
        <Route exact path="/" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="general" pageSize={10} country="in" category="general"/>}></Route>
        <Route exact path="/business" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="business" pageSize={10} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment"element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="entertainment" pageSize={10} country="in" category="entertainment"/>}></Route>
        <Route exact path="/general" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="general" pageSize={10} country="in" category="general"/>}></Route>
        <Route exact path="/health" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="health" pageSize={10} country="in" category="health"/>} ></Route>
        <Route exact path="/science" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="science" pageSize={10} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="sports" pageSize={10} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element = {<News updateProgress = {updateProgress} apiKey = {apiKey} key="technology" pageSize={10} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
}
export default App;