import React from 'react'
import Collapse from '@collapse/Collapse'
import '@apropos/apropos.scss'


const Apropos = () => {
  return (
    
    <div className='apropos'>
          <div className='apropos-collapse'>
              <Collapse title="Fiabilité" content_apropos={fiabilité} />
              <Collapse title="Respect" content_apropos={respect}/>
              <Collapse title="Service" content_apropos={service}/>
              <Collapse title="Sécurité" content_apropos={securite}/>
          </div>
    </div>
  )
}
const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les phtos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const respect ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entrainera une exclusion de notre plateforme."
const service ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entrainera une exclusion de notre plateforme."
const securite="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logements correspond aux critères de sécurité établis par nos services. En laissant une note aussi à l'hotel qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. nous organisons également des ateliers sur la sécurité domestique pour nos hotes."

export default Apropos
