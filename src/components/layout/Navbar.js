import React, {Fragment} from 'react'

export const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <ul>
                    <li className="title"><i className="fas fa-rainbow" /> REALWeather</li>
                    <div className="mobile">
                    </div>
                </ul>
            </nav>
        </Fragment>
    )
}
export default Navbar;