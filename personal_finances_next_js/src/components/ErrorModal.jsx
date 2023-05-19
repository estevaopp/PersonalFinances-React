import React from 'react';

const ErrorModal = ({ error, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Error</h2>
        <p className="mb-4">{error}</p>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;