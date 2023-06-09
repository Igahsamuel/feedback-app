
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIcon from './components/AboutIcon'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  // using destructuring
  
  return (
    <FeedbackProvider>
   <Router>
    <Header/>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={
          <>
          <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
          </>
        }/>     
        <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIcon/>
    </div>
    </Router>
     </FeedbackProvider>
  )
}

export default App