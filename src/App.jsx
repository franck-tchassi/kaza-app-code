import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from '@header/Header';
import Footer from '@footer/Footer';
import Accueil from '@accueil/Accueil';
import Apropos from '@apropos/Apropos'
import Banner from '@banner/Banner'
import Logement from '@logement/Logement'
import Erreur from '@erreur/Erreur';





function App() {

  return (
    <>
      <Router>
            <Header />
            <main className='main-container'>
                <Banner />
                <Routes>
                      <Route path='/' element={<Accueil />}/>
                      <Route path='/apropos' element={<Apropos />}/>
                      <Route path='/logement/:id' element={<Logement />}/>
                      <Route path='*' element={<Erreur />}/>
                </Routes>
            </main>
            
            <Footer />
      </Router>
    </>
  )
}

export default App
