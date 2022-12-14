import React, { useState, useEffect } from 'react'






export default function Header(props) {
    const {randomDateGenerator} = props
    return(
        <div>
            <button onClick={e => randomDateGenerator()} >Random picture</button>
            <span>Airiel's NASA APOD Generator</span>
            specific date search bar?
          
    </div>
    )
}