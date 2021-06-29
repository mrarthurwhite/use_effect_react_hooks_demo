import './App.css';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';

function GetWordsWAxiosNLoading() {
  const [words, setWords] = useState([]);
  let isLoading = false;
  let [isLoadings, setIsLoadings] = useState(false); // initially using state variable
  console.log("isLoading prefetch " + isLoading); 

  async function fetchData(){
    //setIsLoading(true);
    isLoading = true;
    console.log("isLoading fetching " + isLoading); 
    let url = 'http://localhost:1111/wordlist';
    const result= await axios(url);
    setWords(result.data);
    //setIsLoading(false);
    isLoading = false;
    console.log("isLoading resetting " + isLoading); 
  };

  useEffect(() => {fetchData()}, [] );
  console.log("isLoading postfetch " + isLoading); 
    return (
    <>
    { isLoading? (<div>Loading . . . </div>) : (     {words.map(w=> <div>{w.word}</div>)}    ) }
    </>
  );
}

export default GetWordsWAxiosNLoading;
