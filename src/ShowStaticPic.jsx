import React from 'react'
import img from './2.jpg'

export default function ShowStaticPic() {
    
    return (
            <> 
                <p>from the Static Pic Module </p>
                <img src={img} alt="static pic"/>        
            </>
            
    )
}
