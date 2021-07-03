import './App.css';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';

function GetWordsWAxiosNLoading() {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
      const url = 'http://localhost:1111/wordlist';
      const result = await axios(url);
      setWords(result.data);
      setIsLoading(false);
  }
  useEffect(fetchData, []);
  return (isLoading ? <div>Loading . . . </div>: words.map(w => <div>{w.word}</div>));
}

export default GetWordsWAxiosNLoading;
