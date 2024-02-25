import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Header() {
  return (
       <header>
        <nav>
          <img src="./src/assets/react.svg" className="nav--icon" alt="React logo" />
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
          
        </nav>
      </header>
    )
}