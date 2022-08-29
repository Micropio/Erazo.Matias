import React from 'react';
import Form from './Form';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fluffly-Clud</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Almohadas Inteligentes</a>
                                    <a className="dropdown-item" href="#">Almohadon Respaldo</a>
                                    <a className="dropdown-item" href="#">Almohadon De Tusor</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Ofertas</a>
                                </div>
                            </li>
                        </ul>
                        <Form ContBuscar="Productos" />
                        <FaShoppingCart className='icon' />
                        <h1 className='icon'>2</h1>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
