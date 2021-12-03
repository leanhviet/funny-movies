// Libs
import React from 'react'
import { whyDidYouUpdate } from 'why-did-you-update'

// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

// Components
import MainLayout from './pages'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(MainLayout)
}

export const App = () => (
  <div className="App">
    <MainLayout />
  </div>
)

export default App
