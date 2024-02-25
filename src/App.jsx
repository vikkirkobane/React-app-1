import React from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
function App() {
  return(
      <div className="container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
}


// App.propTypes = {
//   txt: React.propTypes.string,
//   cat: React.propTypes.number
// }
export default App
