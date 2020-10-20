// NAVE BAR COMPONENT

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse.collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <div className="navbar-brand">
                                    <NavLink exact to="/"><h1><span>Donate </span> IT</h1></NavLink>
                                </div>
                            </div>
                            <div className="navbar-collapse collapse">
                                <div className="menu">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation"><Link to="/home" >Home</Link></li>
                                        <li role="presentation"><Link to="/incident" >Incident</Link></li>
                                        <li role="presentation"><Link to="/donation" >Donation</Link></li>
                                        <li role="presentation"><Link to="/contact" >Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;