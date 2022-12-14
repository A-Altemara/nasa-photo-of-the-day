import React, { useState, useEffect } from 'react'

export default function Description(props) {
    const {date, explanation, copyright, hdurl} = props
    return (
        <div>
            <p>{date}</p>
            <p>{explanation}</p>
            {copyright && <p id='copyright'>Copyright by {copyright}</p>}
            <p>{hdurl} </p>
        </div>
    )
}