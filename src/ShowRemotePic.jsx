import React,{useEffect,useState} from 'react'

export default function ShowRemotePic() {
    console.log(` from the Remote Pic Module`)

   const [imgSrc, setImgSrc] = useState("")


    useEffect(() => {
        
        fetch()
        .then(r=>r.json())
        .then( r => setImgSrc(r))       
       
    }, [])


    return (
        <div>
            Just Simple Text
            {imgSrc && <img src={imgSrc} />}
        </div>
    )
}
