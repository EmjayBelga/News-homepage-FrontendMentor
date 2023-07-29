import React from 'react'
import { useState } from 'react'
import '../../styles/Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(prevState => !prevState)
  }
 
  return (
    <header className="header">
        <img className="header__logo" src="../assets/logo.svg" alt="Website Logo" />
        <nav>
          <ul className={click ? "header__nav-menu active" : "header__nav-menu"}>
            <li>
              <a className="header__nav-link" href="#">Home</a>
            </li>
            <li>
              <a className="header__nav-link" href="#">New</a>
            </li>
            <li>
              <a className="header__nav-link" href="#">Popular</a>
            </li>
            <li>
              <a className="header__nav-link" href="#">Trending</a>
            </li>
            <li>
              <a className="header__nav-link" href="#">Categories</a>
            </li>
          </ul>
          <button 
            className="header__bars"
            onClick={handleClick}
          >
            <img 
              src={click ? "../assets/icon-menu-close.svg" : "../assets/icon-menu.svg"}
              alt="Header Bars" />
          </button>
        </nav>
  </header>
  )
}

export default Navbar