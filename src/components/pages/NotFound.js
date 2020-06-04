import React from 'react'
import Error404 from '../../img/Scene/7.svg';
export const NotFound = () => {
    return (
        <div className="result unfound">
            <div style={{textAlign: "center"}}>Uh-oh! We couldn't find the page you were looking for.</div>
            <img src={Error404} alt="Error 404, not found"/>
        </div>
    )
}
export default NotFound;