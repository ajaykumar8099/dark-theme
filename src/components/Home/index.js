// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="dark-theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
            <h1 className="dark-theme-head">Home</h1>
          </div>
        ) : (
          <div className="light-theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="img-home"
            />
            <h1 className="head-light">Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
