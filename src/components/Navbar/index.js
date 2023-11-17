// Write your code here

import {Link} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const onClickButton = () => {
            console.log('clicked')
            toggleTheme()
          }

          return isDarkTheme ? (
            <nav className="navbar dark-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="img-nav"
                alt="website logo"
              />
              <ul className="header-bar">
                <Link to="/" className="dark-home">
                  <li>Home </li>
                </Link>
                <Link to="/about" className="dark-home">
                  <li>About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="button-bar"
                data-testid="theme"
                onClick={onClickButton}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="img-nav"
                  alt="theme"
                />
              </button>
            </nav>
          ) : (
            <nav className="navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="img-nav"
                alt="website logo"
              />
              <ul className="header-bar">
                <Link to="/" className="home">
                  <li>Home </li>
                </Link>
                <Link to="/about" className="home">
                  <li>About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="button-bar"
                onClick={onClickButton}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="img-nav"
                  alt="theme"
                />
              </button>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Navbar
