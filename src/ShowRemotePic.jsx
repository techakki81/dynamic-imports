import React,{useEffect,useState} from 'react'

export default function ShowRemotePic() {
    console.log(` from the Remote Pic Module`)

    const [imgSrc, setImgSrc] = useState("")


    useEffect(() => {
        
        fetch("https://picsum.photos/v2/list")
        .then(r=> { console.log(r); return r.json()})
        .then( r => setImgSrc(r[0].download_url))              
    }, [])

    return (
        <>
           <p>  Remote Downloaded Image</p>
            {imgSrc && <img src={imgSrc} alt="remote pic" />} 
        </>
    )
}
