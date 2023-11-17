// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="dark-theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="img-home"
            />
            <h1 className="dark-theme-head">Lost Your Way?</h1>
            <p className="dark-theme-para">We cannot seem to find the page</p>
          </div>
        ) : (
          <div className="light-theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="img-home"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page</p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default NotFound
