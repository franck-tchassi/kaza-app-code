import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from '@header/Header';
import Footer from '@footer/Footer';

function App() {

  return (
    <>
      <Router>
            <Header />
            <main>
                <Routes>
                      <Route />
                </Routes>
            </main>
            <Footer />
      </Router>
    </>
  )
}

export default App
