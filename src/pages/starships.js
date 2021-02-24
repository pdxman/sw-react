import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { gsap } from "gsap";

export default function Starships(){
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        gsap.from(pageRef.current, {
          autoAlpha: 0,
          x: 250,
          ease: 'Power1.inOut',
          delay: 1
        })
      })
    
      const pageRef = useRef(null)

    useEffect(() => {
        setLoading(true)
        axios.get('https://swapi.dev/api/starships/?format=json')
        .then(response => {
            console.log(response.data.results)
            setResults(response.data.results)
            setLoading(false)
        })
    }, [])

    

    return(
        <>
         {loading ? (
            <h2 className="loading">Loading data...</h2>
        ) : 
            (<div className="flex" ref={pageRef}>
                {results.map( result =>(
                    <div className="card" >
                        <h2>{result.name}</h2>
                        <p><strong>Model: </strong> {result.model}</p>
                        <p><strong>Manufacturer: </strong> {result.manufacturer}</p>
                    </div>
                ))}
            </div>)}
        </>
    )
}