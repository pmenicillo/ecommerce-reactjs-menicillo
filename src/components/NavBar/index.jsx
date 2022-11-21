import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__brand" href="#">Mascotitas Pet-Shop</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Todo</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Perros</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Gatos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;