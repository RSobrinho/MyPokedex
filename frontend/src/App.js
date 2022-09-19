import './style.scss'
// import PokeCardsContainer from './components/PokeCard/pokeCardsContainer'
import PokeCard from './Components/PokeCard/pokeCard'

function App() {
  return (
    <div className="App">
      <PokeCard pokeId={1} />
    </div>
  )
}

export default App
