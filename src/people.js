import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function People(){
   const [results, setResults] = useState([])
   const [name, setName] = useState('Name Goes Here')

   useEffect(() => {
       axios.get('https://swapi.dev/api/starships/?format=json')
        .then(response => {
            console.log(response.data.results)
            setResults(response.data.results)
        })
   }, [])

   const handleChange = event => {
       event.preventDefault();
       setName(event.target.value);
   }

    return(
        <>
            <h1>Star Wars Stuff</h1>
            <div>
                <form>
                    <select value={name} onChange={handleChange}>
                        {results.map(result =>(
                            <option value={result.name}>{result.name}</option>
                        ))}
                     </select>
                </form>
                <h2>{name}</h2>
            </div>
        </>
    )
}