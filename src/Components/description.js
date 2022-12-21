import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    align-items: center;
    margin: 2% 5% 2% 5%;
`

const StyledA = styled.a`
    margin: 3%;
    padding-bottom: 3%;
    color: darkgrey;

    width: 100vw
`

export default function Description(props) {
    const { date, explanation, copyright, hdurl } = props
    return (
        <div>
            <StyledP>Date taken: {date}</StyledP>
            <StyledP>{explanation}</StyledP>
            {copyright && <StyledP id='copyright'>Copyright by: {copyright}</StyledP>}
            <StyledA href={hdurl} target='_blank' >The high resolution version can be found here.</StyledA>
        </div>
    )
}