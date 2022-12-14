import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css";
import Header from './Components/header';
import Picture from './Components/picture';
import Description from './Components/description';




function App() {
  const [date, setDate] = useState("2022-12-13")

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=cXF3Tdgf4WckzDo4fITyvAfJ2egdKtCtLOgN37hI&date=${date}`)
    .then(res =>{
      console.log(res)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Picture />
      <Description />
    </div>
  );
}

export default App;
