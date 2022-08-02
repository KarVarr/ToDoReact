import React from 'react';
import './ButtonReset.css';
const ButtonReset = props => {
  return (
    <button
      title='Delete all notes'
      className='button-reset'
      onClick={() => {
        props.onReset();
      }}
    >
      <i className='fa-solid fa-trash-can'></i>
    </button>
  );
};

export default ButtonReset;
