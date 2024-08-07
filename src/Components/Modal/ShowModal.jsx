import React, { useEffect } from 'react';
import './modal.scss';
import modalfoto from "../../assets/Images/newsletter-popup.webp";

function ShowModal({ showModal, closeModal }) {
  useEffect(() => {
    if (showModal) {
      const modalOverlay = document.querySelector('.modal-overlay');
      const modalContent = document.querySelector('.modal-content');
      if (modalOverlay && modalContent) {
        setTimeout(() => {
          modalOverlay.classList.add('show');
          modalContent.classList.add('show');
        }, 1000); 
      }
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={modalfoto} alt="Newsletter" />
          </div>
          <div className="modal-text">
            <h2 className="modal-h2">GET THE NEWSLETTER GET 10% OFF</h2>
            <p className="modal-p">Stay up to date with our exciting product developments, get special offers, and receive 10% off your first order.</p>
            <input className="modal-inp" type="email" placeholder="Email" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
