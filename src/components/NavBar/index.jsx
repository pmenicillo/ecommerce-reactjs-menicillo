import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Mascotitas Pet-Shop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/'>Todo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/category/dogs' >Perros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/category/cats'>Gatos</NavLink>
                                </li>
                            </ul>
                                <li className="nav-item">
                                    <NavLink className="nav__link" to='/cart'>
                                    <CartWidget />
                                    </NavLink>
                                </li>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="submit">2</button>
                            </form>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;



{/*
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
                    <li>
                        <a className="nav__link" href="#">
                             <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
*/}