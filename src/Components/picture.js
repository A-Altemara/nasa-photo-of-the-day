import React, { useState, useEffect } from 'react'

export default function Picture(props) {
    const {url, title} = props
    return(
        <div>
            <img src={url} alt={`NASA picture of the Day titled: ${title}`} ></img>
        </div>
    )
}