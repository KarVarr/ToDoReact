import React, { useState } from 'react';
import ButtonReset from './ButtonReset';
import List from './List';
import ButtonAdd from './ButtonAdd';
import './ToDoApp.css';
import Swal from 'sweetalert2';
//=============================

function ToDoApp() {
  const [text, setText] = useState('');
  const [item, setItem] = useState([]);

  const handleChange = e => {
    const newLi = e.target.value;
    setText(newLi);
  };
  const handleClickAdd = () => {
    if (text !== '') {
      setItem(prev => {
        return [...prev, text];
      });
      setText('');
    } else {
      return;
    }
  };
  const keyEnterPress = e => {
    if (e.key === 'Enter') {
      setItem(prev => {
        return [...prev, text];
      });
      setText('');
    } else {
      return;
    }
  };

  const handleReset = () => {
    //SWAL ALERT =========================
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        setItem([]);
        setText('');
        Swal.fire('Deleted!', 'Your list has been deleted.', 'success');
      } else {
        return;
      }
    });
    //SWAL ALERT =========================

    //USUAL ALERT =========================
    // let answer = window.confirm("Delete all notes?");
    // if (Swal) {
    //   setItem([]);
    //   setText("");
    // } else {
    //   return;
    // }
    //USUAL ALERT =========================
  };

  return (
    <div className='app'>
      <div className='for-footer-btn-top'>
        <div className='input'>
          <input
            autoFocus={false}
            placeholder='Make a note...'
            type='text'
            onChange={handleChange}
            onKeyPress={keyEnterPress}
            value={text}
          />
        </div>
        <ul className='grid-notes'>
          {item.map((value, index) => (
            <List
              key={index}
              text={value.charAt(0).toUpperCase() + value.slice(1)}
            />
          ))}
        </ul>
      </div>
      <div className='for-footer-btn-bottom'>
        <div className='button-section'>
          <ButtonReset onReset={handleReset} />
          <ButtonAdd onAdd={handleClickAdd} />
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
