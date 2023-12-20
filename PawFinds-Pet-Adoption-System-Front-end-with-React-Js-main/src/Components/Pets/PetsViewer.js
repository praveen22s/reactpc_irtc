import React, { useState } from 'react';
import './PetsViewer.css';
import AdoptForm from '../AdoptForm/AdoptForm';

const PetsViewer = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='pet-view-card'>
      <div className='pet-card-pic'>
        <img src={props.pet.picture} alt={props.pet.name} />
      </div>
      <div className='pet-card-details'>
        <h2>{props.pet.name}</h2>
        <p><b>Type:</b> {props.pet.type}</p>
        <p><b>Age:</b> {props.pet.age}</p>
        <p><b>Location:</b> {props.pet.location}</p>
      </div>
      <div className='show-interest-btn'>
        <button onClick={togglePopup}>Show Interest <i className="fa fa-paw"></i></button>
      </div>
      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <AdoptForm pet={props.pet}/>
          </div>
          <button onClick={togglePopup} className='close-btn'>
            Close <i className="fa fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default PetsViewer;
