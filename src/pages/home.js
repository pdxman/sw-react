import gsap from 'gsap/gsap-core'
import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function HomePage(){
    const menuRef = useRef(null);
    // const linkRef = useRef(null)


    // useEffect(() => {
    //     const stuffins = [
    //         menuRef.current
            
    //     ]; 
        
        // gsap.from(menuRef.current, {
        //     autoAlpha: 0,
        //     x: 250,
        //     ease: 'none',
        //     delay: 2, 
        //     scale: 0.1,
        //     rotate: 360
        //     // skewX: "30deg",
        //     // rotationY: 130,
        //     // transformOrigin: "50% 50% -400px"
        // })

        // gsap.from( stuffins, {
        //     duration: 1.5,
        //     opacity: 1,
        //     rotate: 360,
        //     x: 100,
        //     ease: "bounce.out"
        // })
       
    
    // })

  
        useEffect(() => {
          gsap.fromTo(menuRef.current, {
            x: 100, 
            rotation: 0,
            background: 'green',
            // autoAlpha: 0,
            // ease: 'none',
            delay: 2
            
          }, 
          {
            x: 300, 
            rotation: 360,
            background: 'red',
            // autoAlpha: 0,
            // ease: 'none',
            delay: 2
            
          })
        })   
      
      

    return(
        <div className="menu">
            <div className="card-wrap">
                {/* <Link className="card-link" to="/">Home</Link> */}
                <Link className="card-link" to="/people">Characters</Link>
                <Link className="card-link" to="/planets">Planets</Link>
                <Link className="card-link" to="/films">Films</Link>
                <Link className="card-link" to="/starships">Starships</Link>
                <Link className="card-link" to="/vehicles">Vehicles</Link>
                <Link ref={menuRef} className="card-link" to="/species">Species</Link>
            </div>
        </div>
    )
}