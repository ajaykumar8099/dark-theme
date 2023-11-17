// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="dark-theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
            />
            <h1 className="dark-theme-head">About</h1>
          </div>
        ) : (
          <div className="light-theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="img-about"
            />
            <h1>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default About
