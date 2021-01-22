/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

const NavBar = () => {
  const [theme, setTheme] = useState('theme-dark')

  const handleThemeChange = () => {
    if (theme === 'theme-dark') {
      document.documentElement.classList.remove(theme)
      document.documentElement.classList.add('theme-light')
      setTheme('theme-light')
    } else {
      document.documentElement.classList.remove(theme)
      document.documentElement.classList.add('theme-dark')
      setTheme('theme-dark')
    }
  }

  return (
    <div className="content-wrapper nav">
      <h1 className="nav__logo">T O D O</h1>

      <img
        src={theme === 'theme-dark' ? moon : sun}
        alt="moon"
        className="nav__icon"
        onClick={() => handleThemeChange()}
      />
    </div>
  )
}

export default NavBar
