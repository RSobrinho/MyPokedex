const axios = require('axios')
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

const getDataByPokeIndex = async (id = 1) => {
  try {
    let { data } = await api.get(`${id}`)

    const name = data.forms[0].name
    const imgFront = data.sprites.front_default

    return { name, imgFront }
  } catch (err) {
    return { err }
  }
}

module.exports = getDataByPokeIndex
