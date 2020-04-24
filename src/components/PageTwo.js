import React from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'

function PageTwo(props){
    const history = useHistory()
    const location = useLocation()
    const {id} = useParams()
    //lets you use these elements without having to props drill


    return(
        <div>
            PageTwo.js
            <br/>
            This is the id on the routing params: {props.match.params.id}
            <br/>
            <button onClick={() => props.history.push('/pageone')} >Take me back to page one</button>
            </div>
    )
}

export default PageTwo