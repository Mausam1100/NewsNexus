import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  
  state = {
    progess: 0
  }

  setProgess = (progess) => {
    this.setState({progess: progess})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progess}
        // onLoaderFinished={() => setProgress(0)}
      />
          <NavBar/>
          <Routes>
              <Route path="/" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='home' pageSize={17} country="in" category="general"/>}/>
              <Route path="/business" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='business' pageSize={17} country="in" category="business"/>}/>
              <Route path="/entertainment" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='entertainment' pageSize={17} country="in" category="entertainment"/>}/>
              <Route path="/general" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='general' pageSize={17} country="in" category="general"/>}/>
              <Route path="/health" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='health' pageSize={17} country="in" category="health"/>}/>
              <Route path="/science" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='science' pageSize={17} country="in" category="science"/>}/>
              <Route path="/sports" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='sports' pageSize={17} country="in" category="sports"/>}/>
              <Route path="/technology" element={<News apiKey={this.apiKey} setProgess={this.setProgess} key='technology' pageSize={17} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

