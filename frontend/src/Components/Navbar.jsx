import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar__gif"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F110074597%2Foriginal.gif&f=1&nofb=1"
        alt="pokeball"
      />
      <input
        type="text"
        name="buscaPokemon"
        id="buscaPokemon"
        placeholder="Busque por um pokemon específico"
        className="navbar__input"
      />

      <img
        className="navbar__gif"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F78.media.tumblr.com%2F577a2566e283f1d72f48c5a6d165e529%2Ftumblr_inline_n1j638tD7j1s2dddg.gif&f=1&nofb=1"
        alt="pokeball"
      />
    </div>
  )
}

export default Navbar
