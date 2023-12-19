import React from 'react';
import '../App.css';

function Row({ id, item }) {
  const date = (value) => {
    let data = new Date(value);
    return data.toLocaleString("ru-RU", {day: '2-digit', month: '2-digit', year: 'numeric'});
  }

  return (
    <tr id={id}>
      <td className='table__row-date'>{date(item.date)}</td>
      <td className='table__row-distance'>{item.distance}</td>
      <td className='table__row-actions'>
        <button className='actions__button edit-button' name='edit-button' type='button'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
          </svg>
        </button>
        <button className='actions__button delete-button' name='delete-button' type='button'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default Row;
