import React from 'react'

export default function Alert(props) {
    function capitalize(word) {
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && <div>
             <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {capitalize(props.alert.type)}:<strong>{props.alert.msg}</strong>
            
            </div>
        </div>}
        </div>
    )
}
