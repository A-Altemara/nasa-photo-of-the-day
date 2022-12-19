import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    margin-left: 25px;
    font-size: 2rem;
    color: darkgray;

    @media only screen and (max-width:600px) {
          font-size: 1.5rem;
      }
 
      @media only screen and (min-width:1200px) {
        font-size: 3rem;
      }
`;

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