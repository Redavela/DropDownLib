import React from 'react';
import './DropDown.css';

const DropDown = ({ label = '', options, handleSelect, id }) => {
  const listeOptions = options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="simple-form-group">
      {label && <label className="simple-text-label">{label}</label>}
      <div>
      <select className='simple-text-input' id={id} onChange={handleSelect}>{listeOptions}</select>
      </div>
    </div>
  );
};

export default DropDown;
