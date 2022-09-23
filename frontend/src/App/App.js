import './App.scss'
import PokeCardsContainer from '../Components/PokeCardContainer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__maincontainer">
        <Navbar />
        <PokeCardsContainer />
        <Footer/>
      </div>
    </div>
  )
}

export default App
