import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function PageOne(props){
    const [number, setNumber] = useState(1)
    return(
        <div>
            PageOne.js
            <br/>
            <button onClick={() => setNumber(number + 1)} >Increase Number</button>
            <br/>
            <Link to={`/pagetwo/${number}`} >  <button>Take me to Page two</button> </Link>
            
            </div>
    )
}

export default PageOne