import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Films(){
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://swapi.dev/api/films/?format=json')
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
                        <h2>Star Wars Episode {result.episode_id}: {result.title}</h2>
                        <p><strong>Opening Crawl:</strong> {result.opening_crawl}</p>
                    </div>
                ))}
            </div>)}
        </>
    )
}