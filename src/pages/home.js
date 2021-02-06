import React from 'react'
import { Link } from "react-router-dom"

export default function HomePage(){
    return(
        <div className="menu">
            <div className="card-wrap">
                <Link className="card-link" to="/people">Characters</Link>
                <Link className="card-link" to="/planets">Planets</Link>
            </div>
        </div>
    )
}