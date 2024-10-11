// Modal.js
import React from 'react';
import './Modal.css';
import { useNavigate } from 'react-router-dom';

// تعريف ان المودل سوف ياتي لها هذه المتغيرات
const Modal = ({ title, deleteBlog ,toggleModal }) => {
  const navigate = useNavigate()
  const deleteCurrentBlog = () => {
    deleteBlog()
    toggleModal()
    navigate('/')
  }
  return (
    // يظهر المودال فقط إذا كانت isOpen تساوي true
    <div className={`modal ${toggleModal ? 'show' : ''}`}>
      <div className="modal-content">
        {/* لو ضغط علي الزرار ده هيبقي الغلق */}
        <button type="button" className="close-button" onClick={toggleModal}>
          <svg className="close-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="modal-body">
          <svg className="modal-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="modal-title">Are you sure you want to delete this product {title} ?</h3>
          {/* زرار الموافقه */}
          <button type="button" className="confirm-button" onClick={deleteCurrentBlog}>
            Yes, I'm sure
          </button>
          {/* زرار الغلق */}
          <button type="button" className="cancel-button" onClick={toggleModal}>
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
