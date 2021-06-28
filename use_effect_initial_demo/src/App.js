import './App.css';
import {  useEffect, useState } from 'react';

import React from 'react';

function App() {
  const [words, setWords] = useState([]);

  async function fetchData(){
    const response= await fetch('http://localhost:1111/wordlist');
    const data = await (response.json());
    setWords(data);
  };

  useEffect(() => {fetchData()}, [] );


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