import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Species(){
    const [results, setResults] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/species/?format=json')
        .then(response => {
            console.log(response.data.results)
            setResults(response.data.results)
        })
    }, [])

    

    return(
        <>
            <div className="flex">
                {results.map( result =>(
                    <div className="card">
                        <h2>Name: {result.name}</h2>
                        <p><strong>Language: </strong> {result.language}</p>
                        <p><strong>Average Lifespan: </strong> {result.average_lifespan}</p>
                    </div>
                ))}
            </div>
        </>
    )
}