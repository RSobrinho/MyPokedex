import './App.scss'
import PokeCardsContainer from '../Components/PokeCardContainer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__maincontainer">
        <PokeCardsContainer />
        <Navbar />
      </div>
    </div>
  )
}

export default App
