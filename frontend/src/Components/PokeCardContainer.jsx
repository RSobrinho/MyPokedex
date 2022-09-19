import React from 'react'
import PokeCard from './PokeCard'

const PokeCardsContainer = props => {
  const getPokemons = () => {
    let listaPokemons = []
    for (let i = 1; i < 200; i++) {
      listaPokemons.push(<PokeCard key={i} pokeId={i} />)
    }
    return listaPokemons
  }

  return <div className="container">{getPokemons()}</div>
}

export default PokeCardsContainer
