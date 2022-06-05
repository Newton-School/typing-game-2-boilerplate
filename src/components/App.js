import React, {useState, useEffect, useRef} from 'react'
import randomWords from 'random-words'
const NUMB_OF_WORDS = 50
const SECONDS = 30

function App() {
  const [words, setWords] = useState([])
 

  useEffect(() => {
    setWords(generateWords())
  }, [])

  function generateWords() {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
  }

  function start() {
      setWords(generateWords())
  }


  function stop () { 
   
  }

  function handleKeyDown() {
    
  }

  function checkMatch() {
       // to match if word typed correctly
  }

  function getCharClass(wordIdx, charIdx, char) {
      // show the backgrount of current char green if correctly typed else show red if wrong
  }


  return (
    <div className="App">
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
        <h2> Show countdown </h2>
        </div>
      </div>
      <div className="control is-expanded section">
        <input  type="text" className="input" onKeyDown={handleKeyDown}  />
      </div>
      <div className="section">
       
        <button id='start' className="button is-info is-fullwidth" onClick={start}>
          Start
        </button> 
        <button id='finish' className="button is-info is-fullwidth" onClick={stop}>
          Stop
        </button> 
      </div>
    
        <div className="section" >
          <div className="card">
            <div className="card-content">
              <div className="content">
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                      )) }
                    </span>
                    <span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <p className="is-size-5">Words per minute:</p>
              <p id="wordpermin" className="has-text-primary is-size-1">
                        Show words per minute here 
              </p>
            </div>
            <div id='accuracy' className="column has-text-centered">
              <p className="is-size-5">Accuracy:</p>
            
                <p  className="has-text-info is-size-1">
                     Show accuracy in here 
                </p>
              
                <p className="has-text-info is-size-1">0%</p>
            
            </div>
          </div>
        </div>
   

    </div>
  );
}

export default App;
