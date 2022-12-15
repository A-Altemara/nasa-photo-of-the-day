import React, { useState, useEffect } from 'react'

export default function Header(props) {
    const {randomDateGenerator, setDate} = props
    return(
        <header>
            <h1>Airiel's NASA APOD Generator</h1>
            <button onClick={e => setDate(randomDateGenerator())} >Random picture</button>
            {/* specific date search bar? */}
          
    </header>
    )
}