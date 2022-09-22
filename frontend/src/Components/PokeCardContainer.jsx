import React from 'react'
import PokeCard from './PokeCard'

const PokeCardsContainer = props => {
  // colocar um botao no final chamado see more, dps dos pokemons, que vai extender a lista

  const getPokemons = () => {
    let listaPokemons = []
    for (let i = 1; i < 51; i++) {
      listaPokemons.push(<PokeCard key={i} pokeId={i} />)
    }
    return listaPokemons
  }

  return <div className="container">{getPokemons()}</div>
}

export default PokeCardsContainer
