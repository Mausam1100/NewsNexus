import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  
  const [progress, setProgress] = useState(0)

  const findProgress = (progress) => {
    setProgress(progress)
  }
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <NavBar/>
          <Routes>
              <Route path="/" element={<News apiKey={apiKey} setProgress={findProgress} key='home' pageSize={17} country="in" category="general"/>}/>
              <Route path="/business" element={<News apiKey={apiKey} setProgress={findProgress} key='business' pageSize={17} country="in" category="business"/>}/>
              <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={findProgress} key='entertainment' pageSize={17} country="in" category="entertainment"/>}/>
              <Route path="/general" element={<News apiKey={apiKey} setProgress={findProgress} key='general' pageSize={17} country="in" category="general"/>}/>
              <Route path="/health" element={<News apiKey={apiKey} setProgress={findProgress} key='health' pageSize={17} country="in" category="health"/>}/>
              <Route path="/science" element={<News apiKey={apiKey} setProgress={findProgress} key='science' pageSize={17} country="in" category="science"/>}/>
              <Route path="/sports" element={<News apiKey={apiKey} setProgress={findProgress} key='sports' pageSize={17} country="in" category="sports"/>}/>
              <Route path="/technology" element={<News apiKey={apiKey} setProgress={findProgress} key='technology' pageSize={17} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}

