import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledHeaderH1 = styled.header`
    margin-left: 25px;
    font-size: 2rem;
    color: darkgray;

    @media only screen and (max-width:600px) {
          font-size: 1.5rem;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
 
      @media only screen and (min-width:1200px) {
        font-size: 3rem;
      }
`;


const StyledButton = styled.button`
  color: darkgray;
  border: 1px solid darkgray;
  background-color: rgb(23, 23, 66);
  width: 50%;
`

export default function Header(props) {
  const { randomDateGenerator, setDate } = props
  // const randomListener = (evt) => {
  //     evt => setDate(randomDateGenerator())
  // }

  return (
    <StyledHeader>
      <StyledHeaderH1>Airiel's NASA APOD Generator</StyledHeaderH1>
      <StyledButton onClick={() => randomDateGenerator()} >Random picture</StyledButton>

      {/* {document.removeEventListener('click', randomListener)} */}
    </StyledHeader>
  )
}

{/* <form id="search">
                <label>Pick a date after 06-16-1995</label>
                <input id="date" name="date" value="Select a date" type="text" />
            </form> */}