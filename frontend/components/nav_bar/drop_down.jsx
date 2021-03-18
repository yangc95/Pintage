import React from 'react';
import { Link } from 'react-router-dom';

export default ({ logout }) => {
    return (
        <ul className="nav-right-dropdown">
            <li>
                <Link onClick={logout} to="/">Log Out</Link>
            </li>
        </ul>
    )
}