import gsap from 'gsap/gsap-core'
import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function HomePage(){
    const menuRef = useRef(null)

    useEffect(() => {
        gsap.from(menuRef.current, {
            autoAlpha: 0,
            x: 250,
            ease: 'none',
            delay: 2
        })
    })

    return(
        <div className="menu" ref={menuRef}>
            <div className="card-wrap">
                <Link className="card-link" to="/people">Characters</Link>
                <Link className="card-link" to="/planets">Planets</Link>
                <Link className="card-link" to="/films">Films</Link>
                <Link className="card-link" to="/starships">Starships</Link>
                <Link className="card-link" to="/vehicles">Vehicles</Link>
                <Link className="card-link" to="/species">Species</Link>
            </div>
        </div>
    )
}