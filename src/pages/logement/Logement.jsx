import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';
import Collapse from '@collapse/Collapse';
import Rating from '@rating/Rating';
import '@logement/logement.scss';

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = logementsData.find((item) => item.id === id);
    setLogement(selectedLogement);
  }, [id]);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div className='logement-container'>
      <div className='pictures'>
        {logement.pictures.map((picture, index) => (
          <img src={picture} alt={logement.title} key={index} />
        ))}
      </div>

      <div className='logement-content'>
        <div className='title-tags'>
          <div className='title-location'>
            <h1 className='title'>{logement.title}</h1>
            <p className='location'>{logement.location}</p>
          </div>
          <div className='tags'>
            {logement.tags.map((tag, index) => (
              <span key={index} className='tag'>{tag}</span>
            ))}
          </div>
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
        <Collapse title='Équipements' description={logement.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default Logement;

