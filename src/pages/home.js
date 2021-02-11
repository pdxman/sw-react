import gsap from 'gsap/gsap-core'
import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function HomePage(){
    const menuRef = useRef(null);
    const linkRef = useRef(null)


    useEffect(() => {
        const stuffins = [
            menuRef.current
            
        ]; 
        
        gsap.from(stuffins, {
            autoAlpha: 0,
            x: 250,
            ease: 'none',
            delay: 2, 
            scale: 0.1,
            rotate: 360
            // skewX: "30deg",
            // rotationY: 130,
            // transformOrigin: "50% 50% -400px"
        })

        gsap.from( linkRef.current, {
            duration: 1.5,
            opacity: 1,
            rotate: 360,
            x: 100,
            ease: "bounce.out"
        })
       
    
    })

    return(
        <div className="menu" ref={linkRef}>
            <div className="card-wrap" >
                {/* <Link className="card-link" to="/">Home</Link> */}
                <Link ref={menuRef} className="card-link" to="/people">Characters</Link>
                <Link ref={menuRef} className="card-link" to="/planets">Planets</Link>
                <Link ref={menuRef} className="card-link" to="/films">Films</Link>
                <Link ref={menuRef} className="card-link" to="/starships">Starships</Link>
                <Link ref={menuRef} className="card-link" to="/vehicles">Vehicles</Link>
                <Link ref={menuRef} className="card-link" to="/species">Species</Link>
            </div>
        </div>
    )
}