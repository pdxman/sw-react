import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Vehicles(){
    const [results, setResults] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/vehicles/?format=json')
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
                        <p><strong>Model: </strong> {result.model}</p>
                        <p><strong>Manufacturer: </strong> {result.manufacturer}</p>
                    </div>
                ))}
            </div>
        </>
    )
}