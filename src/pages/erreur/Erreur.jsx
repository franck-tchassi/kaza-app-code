import React from 'react'
import '@erreur/erreur.scss'
import { Link } from 'react-router-dom'

const Erreur = () => {
  return (
    <div className='erreur-container'>
      <span>404</span>
      <p className='not-exist'>Oups! La page que vous demandez n'existe pas.</p>
      <p className='redirection'><Link to='/'>Retourner sur la page d’accueil</Link></p>
    </div>
  )
}

export default Erreur
