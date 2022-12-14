import React, { useState, useEffect } from 'react'

export default function Picture(props) {
    const {hdurl, title} = props
    return(
        <div>
            <img src={hdurl} alt={`NASA picture of the Day titled: ${title}`} ></img>
        </div>
    )
}