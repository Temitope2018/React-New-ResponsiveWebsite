import React from 'react'
import './feature.css'
function feature(props){

    return(
        <div>
        <div>
            <h1>{props.text}</h1>
            <p>{props.article}</p>
        </div>
    
        </div>
    );


}
export default feature