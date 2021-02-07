import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function People(){
   const [results, setResults] = useState([])
   const [name, setName] = useState('Name Goes Here')
   const [loading, setLoading] = useState(false)

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
            (<div className="flex">
                {results.map(result =>(
                    <div className="card">
                        <h2>Name: {result.name}</h2>
                        <p><strong>Eye Color:</strong> {result.eye_color}</p>
                        <p><strong>Year of Birth:</strong> {result.birth_year}</p>
                    </div>
                ))}
            </div>)}
        </>
    )
}