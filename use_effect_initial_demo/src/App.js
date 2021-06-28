import './App.css';
import {  useEffect, useState } from 'react';

import React from 'react';

function App() {
  const [words, setWords] = useState([]);

  let fetchData = () => {
                          fetch('http://localhost:1111/wordlist')
                          .then(response => response.json())
                          .then (data =>
                                            {
                                                  setWords(data);
                                            } 
                                          )
                        };

  useEffect(fetchData, [] );


    return (
    <>
    {
      words.map(w=> <div>{w.word}</div>)
    }
    </>
  );
}

export default App;
/**
 *
 * In functional components, you use the useEffect Hook to fetch data when the component loads or some information changes.  You’ll also need to save the results with the useState Hook.   
 */