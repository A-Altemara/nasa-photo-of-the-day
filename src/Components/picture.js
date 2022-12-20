import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
    margin: 2%;
    width: 90vw;
`

export default function Picture(props) {
    const {url, title} = props
    return(
        <div className='image'>
            <StyledImg src={url} alt={`NASA picture of the Day titled: ${title}`} ></StyledImg>
        </div>
    )
}