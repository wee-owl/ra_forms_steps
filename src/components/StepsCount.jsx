import React from 'react';
import Row from './Row.jsx';
import '../App.css';

let rowArray = [];

function StepsCount() {
  const [state, setState] = React.useState([]);

  function compare(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  function handleChange(e) {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target[0].value = '';
    e.target[1].value = '';
    for (let i = 0; i < rowArray.length; i++) {
      if (rowArray[i] && (state.date === rowArray[i].date)) {
        rowArray[i].distance = `${Number(state.distance) + Number(rowArray[i].distance)}`;
        setState((prevState) => ({
          ...prevState, [rowArray[i].distance]: e.target.value
        }));
        return rowArray;
      }
    }
    rowArray.push(state);
    rowArray.sort(compare);
    setState([]);
  }

  function deleteRow(e) {
    if (e.target.closest('button.delete-button')) {
      rowArray.splice(e.target.closest('tr').id, 1);
    }
    setState((prevState) => ({...prevState}));
  }

  return (
    <div className='container'>
      <form className='form' name='form' onSubmit={handleSubmit}>
        <label className='form__label'>
          <p className='form__label-text'>Дата (ДД.ММ.ГГ)</p>
          <input className='form__field' type='date' name='date' onChange={handleChange}/>
        </label>
        <label className='form__label'>
          <p className='form__label-text'>Пройдено, км</p>
          <input className='form__field' type='number' name='distance' onChange={handleChange} min={0} step={0.1} required/>
        </label>
        <button className='form__button' name='button' type='submit'>
          ОК
        </button>
      </form>
      <table className='table'>
      <thead>
        <tr>
          <th className='table__header-date'>Дата (ДД.ММ.ГГ)</th>
          <th className='table__header-distance'>Пройдено, км</th>
          <th className='table__header-actions'>Действия</th>
        </tr>
      </thead>
      <tbody onClick={deleteRow}>
        {
          rowArray.length === 0 ? 
          <tr><td colSpan={3}>Записи отсутствуют</td></tr> : 
          rowArray.map((item, i) => <Row key={i} id={i} item={item}/>)
        }
      </tbody>
    </table>
    </div>
  )
}

export default StepsCount;
