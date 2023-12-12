import React from 'react';
import Table from './Table.jsx';
import '../App.css';

function StepsCount() {
  const [state, setState] = React.useState({
    date: '',
    distance: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    setState({ date: e.target[0].value, distance: e.target[1].value });
    e.target[0].value = '';
    e.target[1].value = '';
  }

  return (
    <div className='container'>
      <form className='form' name='form' onSubmit={handleSubmit}>
        <label className='form__label'>
          <p className='form__label-text'>Дата (ДД.ММ.ГГ)</p>
          <input className='form__field' type='date' name='date'/>
        </label>
        <label className='form__label'>
          <p className='form__label-text'>Пройдено, км</p>
          <input className='form__field' type='number' name='distance' min={0} step={0.1} required/>
        </label>
        <button className='form__button' name='button' type='submit'>
          ОК
        </button>
      </form>
      {
        (state.date !== '' && state.distance !== '') ? 
        <Table data={state}/> : 
        <p>Записи отсутствуют</p>
      }
    </div>
  )
}

export default StepsCount;
