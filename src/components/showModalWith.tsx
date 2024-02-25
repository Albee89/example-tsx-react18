import React, { useState } from 'react';

interface ModalProps {
  content: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

interface ShowModalWithProps {
  content: React.ReactNode;
}

const ShowModalWith: React.FC<ShowModalWithProps> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <Modal content={content} onClose={closeModal} />}
    </>
  );
};

export default ShowModalWith;
