import React from 'react'
import { useState, useEffect } from 'react'
import getDataByPokeIndex from '../api'

const PokeCard = props => {
  const [nameState, setName] = useState('Teste')
  const [imgsState, setImgs] = useState('img0')
  const putData = async () => {
    const { name, imgFront } = await getDataByPokeIndex(props.pokeId)

    setName(prevState => name)
    setImgs(prevState => imgFront)
    return name
  }

  useEffect(() => {
    putData()
  })

  return (
    <div className="card">
      <div className="card__imgborder">
        <img className="card__img" src={imgsState} alt="pokemon" />
      </div>

      <h3 className="card__title">{nameState}</h3>
      <input type="button" value="ver mais" className="card__btn" />
    </div>
  )
}

export default PokeCard
