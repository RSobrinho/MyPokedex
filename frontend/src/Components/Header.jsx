import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Bem vindo a minha Pokedéx :D</h1>
      <div className="header__desc">
        <h2 className="header__subtitle">Feito por Rafael Sobrinho</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rsobrinho"
          className="header__link"
        >
          <h3>LinkedIn</h3>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/RSobrinho"
          className="header__link"
        >
          <h3>GitHub</h3>
        </a>
      </div>
    </div>
  )
}

export default Header
