import React, { useState } from 'react';

import './List.css';
const List = props => {
  const [line, setLine] = useState(false);

  const handleDelete = () => {
    setLine(prev => {
      return !prev;
    });
  };

  const a = () => {
    let newLine = line;
    newLine.sort((a, b) => b - a);
  };

  return (
    <div
      className='box-list'
      style={{
        backgroundColor: line && 'teal',
      }}
    >
      {
        <li
          className='list'
          style={{
            textDecoration: line ? 'line-through' : null,
            color: line ? 'lightsteelblue' : 'black',
          }}
        >
          {props.text}
        </li>
      }
      <button className='btn-del' onClick={handleDelete}>
        <i className={line ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}></i>
      </button>
    </div>
  );
};

export default List;
