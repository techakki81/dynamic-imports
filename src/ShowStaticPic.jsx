import React from 'react'
import img from './2.jpg'

export default function ShowStaticPic() {
    console.log(` from the Static Pic Module`)
    return (
            <img src={img} />        
    )
}
