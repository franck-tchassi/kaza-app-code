import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from '@header/Header';
import Footer from '@footer/Footer';
import Accueil from '@accueil/Accueil';
import Apropos from '@apropos/Apropos'

function App() {

  return (
    <>
      <Router>
            <Header />
            <main className='main-container'>
                <Routes>
                      <Route path='/' element={<Accueil />}/>
                      <Route path='/apropos' element={<Apropos />}/>
                </Routes>
            </main>
            <Footer />
      </Router>
    </>
  )
}

export default App
