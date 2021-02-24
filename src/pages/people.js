import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { gsap } from "gsap";

export default function People(){
   const [results, setResults] = useState([])
   const [name, setName] = useState('Name Goes Here')
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
       axios.get('https://swapi.dev/api/people/?format=json')
        .then(response => {
            console.log(response.data.results)
            setResults(response.data.results)
            setLoading(false)
        })
   }, [])

   const handleChange = event => {
       event.preventDefault();
       setName(event.target.value);
   }

    return(
        <>
        {loading ? (
            <h2 className="loading">Loading data...</h2>
        ) : 
            (<div className="flex" ref={pageRef}>
                {results.map(result =>(
                    <div className="card" ref={pageRef}>
                        <h2>{result.name}</h2>
                        <p><strong>Eye Color:</strong> {result.eye_color}</p>
                        <p><strong>Year of Birth:</strong> {result.birth_year}</p>
                    </div>
                ))}
            </div>)}
        </>
    )
}