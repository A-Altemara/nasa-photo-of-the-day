import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css";
import Header from './Components/header';
import Picture from './Components/picture';
import Description from './Components/description';
import test from './testData';




function App() {
  const [date, setDate] = useState("")
  const [pictureData, setPictureData] = useState({})

  const randomDateGenerator = () => {
    const start = "1995-06-16T00:00:00"
    const startDate = new Date(start).getTime()
    console.log((new Date(startDate + (Math.random() * (new Date(Date.now()).getTime() - startDate))).toISOString().substring(0, 10)))
    setDate(new Date(startDate + (Math.random() * (new Date(Date.now()).getTime() - startDate))).toISOString().substring(0, 10))
  }

  useEffect(() => {
    console.log('useEffect runs: ' + date)
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=cXF3Tdgf4WckzDo4fITyvAfJ2egdKtCtLOgN37hI&date=${date}`)
      .then(res => {
        setPictureData(res.data)
      }).catch(err => console.error(err))
  }, [date])

  return (
    <div className="App">
      <Header date={date} setDate={setDate} randomDateGenerator={randomDateGenerator} />
      <Picture url={pictureData.url} title={pictureData.title} />
      <Description hdurl={pictureData.hdurl} date={pictureData.date} explanation={pictureData.explanation} copyright={pictureData.copyright} />
    </div>
  );
}

export default App;
