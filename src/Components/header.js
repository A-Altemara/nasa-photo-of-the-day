import React, { useState, useEffect } from 'react'

export default function Header(props) {
    const {randomDateGenerator, setDate} = props
    return(
        <header>
            <h1>Airiel's NASA APOD Generator</h1>
            <button onClick={e => setDate(randomDateGenerator())} >Random picture</button>
            {/* <form id="search">
                <label>Pick a date after 06-16-1995</label>
                <input id="date" name="date" value="Select a date" type="text" />
            </form> */}
          
    </header>
    )
}