import React, {Fragment} from 'react'

export const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <ul>
                    <li className="title"><i className="fas fa-rainbow" /> REALWeather</li>
                    <li className="item"><a href="#!">Help</a></li>
                    <li className="item"><a href="#1">About</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}
export default Navbar;