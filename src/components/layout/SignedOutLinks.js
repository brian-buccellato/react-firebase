import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
            <li>
                <NavLink to="/sign-in">Log In</NavLink>
            </li>
        </ul>
    );
};

export default SignedOutLinks;
