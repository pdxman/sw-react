import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { gsap } from "gsap";

export default function Species(){
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const pageRef = useRef(null)

    useEffect(() => {
        setLoading(true)
        axios.get('https://swapi.dev/api/species/?format=json')
        .then(response => {
            console.log(response.data.results)
            setResults(response.data.results)
            setLoading(false)
        })
        gsap.from(pageRef.current, {
            autoAlpha: 0,
            x: 250,
            ease: 'Power1.inOut',
            delay: 1
          })
    }, [])

    

    return(
        <>
             {loading ? (
            <h2 className="loading">Loading data...</h2>
        ) : 
            (<div className="flex" ref={pageRef}>
                {results.map( result =>(
                    <div className="card" ref={pageRef}>
                        <h2>{result.name}</h2>
                        <p><strong>Language: </strong> {result.language}</p>
                        <p><strong>Average Lifespan: </strong> {result.average_lifespan}</p>
                    </div>
                ))}
            </div>)}
        </>
    )
}