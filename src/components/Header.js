import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Header(props){
    return(
        <div>
            Header.js
            <br/>
            <Link to='/' >Landing</Link>
            <br/>
            <Link to='pageone' >pageOne</Link>
        </div>
    )
}

export default withRouter(Header)