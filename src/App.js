import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'

import Sidebar from './components/Sidebar'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import PhotosScreen from './screens/PhotosScreen'
import ProjectsScreen from './screens/ProjectsScreen'
import BlogsScreen from './screens/BlogsScreen'
import PreLoaderAnimation from './components/PreLoaderAnimation'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false)
    }, [2000])

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='container'>
      {loading ? (
        <PreLoaderAnimation />
      ) : (
        <Router>
          <Sidebar />
          <main>
            <Route path='/about' component={AboutScreen} />
            <Route path='/contact' component={ContactScreen} />
            <Route path='/photos' component={PhotosScreen} />
            <Route path='/projects' component={ProjectsScreen} />
            <Route path='/blogs' component={BlogsScreen} />
            <Route path='/' component={HomeScreen} exact />

            <Redirect to='/' />
          </main>
        </Router>
      )}
    </div>
  )
}

export default App
