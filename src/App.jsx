import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GitHubFooter from './components/GithubFooter'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar/>
      <Hero/>
      <GitHubFooter/>
    </div>
  )
}
export default App;