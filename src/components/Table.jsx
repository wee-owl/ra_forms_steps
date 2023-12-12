import React from 'react';
import Row from './Row.jsx';
import '../App.css';

const dataArray = [];

function Table({ data }) {
  const rowArray = [];

  function compare(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  function group(arr, key) {
    const grouped = {};
    for (const n of arr) {
      const k = n[key];
      if (!grouped.hasOwnProperty(k)) grouped[k] = [];
      grouped[k].push(n);
    }
    return grouped;
  }

  function handleClick(e) {
    const id = e.target.closest('tr').id;
    rowArray.slice(id, 1);
    console.dir(rowArray);
  }

  dataArray.push(data);
  let uniqueArray = [...new Set(dataArray)];
  uniqueArray.sort(compare);
  const sumArray = Object.values(group(uniqueArray, 'date'));
  sumArray.forEach(item => {
    let newItem = {
      date: item[0].date,
      distance: item.reduce((acc, cur) => acc + Number(cur.distance), 0),
    };
    rowArray.push(newItem);
  });

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='table__header-date'>Дата (ДД.ММ.ГГ)</th>
          <th className='table__header-distance'>Пройдено, км</th>
          <th className='table__header-actions'>Действия</th>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
        {
          rowArray.map((item, i) => <Row key={i} id={i} item={item}/>)
        }
      </tbody>
    </table>
  )
}

export default Table;
