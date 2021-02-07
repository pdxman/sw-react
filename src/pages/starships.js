import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Starships(){
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

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
            (<div className="flex">
                {results.map( result =>(
                    <div className="card">
                        <h2>Name: {result.name}</h2>
                        <p><strong>Model: </strong> {result.model}</p>
                        <p><strong>Manufacturer: </strong> {result.manufacturer}</p>
                    </div>
                ))}
            </div>)}
        </>
    )
}