import React, { useState, useEffect } from 'react'






export default function Header(props) {
    const {randomDateGenerator, setDate} = props
    return(
        <div>
            <button onClick={e => setDate(randomDateGenerator())} >Random picture</button>
            <span>Airiel's NASA APOD Generator</span>
            specific date search bar?
          
    </div>
    )
}