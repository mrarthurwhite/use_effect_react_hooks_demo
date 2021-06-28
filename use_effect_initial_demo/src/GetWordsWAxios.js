import './App.css';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';

function GetWordsWAxios() {
  const [words, setWords] = useState([]);

  async function fetchData(){
    let url = 'http://localhost:1111/wordlist';
    const response= await axios(url);
    setWords(response);


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

export default GetWordsWAxios;
/**
 *
 * In functional components, you use the useEffect Hook to fetch data when the component loads or some information changes.  You’ll also need to save the results with the useState Hook.   
 */