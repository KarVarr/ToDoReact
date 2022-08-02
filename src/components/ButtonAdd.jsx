import React from 'react';
import './ButtonAdd.css';
const ButtonAdd = props => {
  return (
    <>
      <button
        className='button-add'
        onClick={() => {
          props.onAdd();
        }}
      >
        <i className='fa-solid fa-plus'></i>
      </button>
    </>
  );
};

export default ButtonAdd;
