import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';
import Collapse from '@collapse/Collapse';
import Rating from '@rating/Rating';
import '@logement/logement.scss';
import Erreur from '@erreur/Erreur';
import Slideshow from '../../components/slideshow/Slideshow';
import Tags from '../../components/tags/Tags';

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const preSlide = ()=>{
    const isFistSlide = currentIndex === 0; 
    const newSlide = isFistSlide? logement.pictures.length - 1 : currentIndex - 1 
    setCurrentIndex(newSlide)
  }
  const nexSlide = ()=>{
    const isLastSlide = currentIndex === logement.pictures.length - 1  ; 
    const newSlide = isLastSlide? 0 : currentIndex + 1 
    setCurrentIndex(newSlide)
  }
  useEffect(() => {
    const intervalId = setInterval(nexSlide, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(intervalId); // Nettoyage du setInterval lors de la suppression du composant
  }, [currentIndex]);

  

  useEffect(() => {
    const selectedLogement = logementsData.find((item) => item.id === id);
    setLogement(selectedLogement);
  }, [id]);

  if (!logement) {
    return <Erreur />;
  }
  

  return (
    <div className='logement-container'>
      <div className='pictures'>
          <Slideshow 
            image={logement.pictures[currentIndex]} 
            title={logement.title}  
            numberTotal={logement.pictures.length} 
            left={preSlide}
            right={nexSlide}
            currentIndex = {currentIndex + 1}
            
          />
      </div> 

      <div className='logement-content'>
        <div className='title-tags'>
          <div className='title-location'>
            <h1 className='title'>{logement.title}</h1>
            <p className='location'>{logement.location}</p>
          </div>
          <Tags tags={logement.tags}/>
        </div>

        <div className='host-rating'>
          <div className='host'>
            <h2 className='name'>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} className='host-picture' />
          </div>
          <div className='rating'>
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className='description-equipment'>
        <Collapse title='Description' description={logement.description} />

        <Collapse title='Équipements'  equipement={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;

