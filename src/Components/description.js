import React, { useState, useEffect } from 'react'

export default function Description(props) {
    const {date, explanation, copyright, hdurl} = props
    return (
        <div>
            <p>Date taken: {date}</p>
            <p>{explanation}</p>
            {copyright && <p id='copyright'>Copyright by: {copyright}</p>}
            <a href={hdurl} target='_blank' >The high resolution version can be found here.</a>
        </div>
    )
}