import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katacroker');
  const [userLetters, setUserLetters] = useState([]);


  const handleClick = () => setNumberOfErrors(numberOfErrors + 1);
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChangeLetter = (ev) => {
    const lastInput = ev.target.value;
    let regex = /^[a-zA-ZñÑá-úÁ-Ú´]$/;
    let isValidLetter = regex.test(lastInput);
  
    if (isValidLetter || lastInput === '') {
      setLastLetter(lastInput);
      if (lastInput !== '') {
        setUserLetters([...userLetters, lastInput]);
      }
    }
  };
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
        return <li key={index} className='letter'>{letter}</li>;    
    });
  };
  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form onSubmit={handleOnSubmit} className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handleChangeLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default App;
