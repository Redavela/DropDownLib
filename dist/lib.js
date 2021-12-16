import React from 'react';
import './DropDown.css';

const DropDown = ({ label = '', options, handleSelect, id }) => {
  const listeOptions = options.map((option, index) => React.createElement(
    'option',
    { key: index, value: option.value },
    option.label
  ));

  return React.createElement(
    'div',
    { className: 'simple-form-group' },
    label && React.createElement(
      'label',
      { className: 'simple-text-label' },
      label
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'select',
        { className: 'simple-text-input', id: id, onChange: handleSelect },
        listeOptions
      )
    )
  );
};

export default DropDown;