import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Navbar = props => {
    const { auth, profile } = props;
    return (
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo left">
                    Buckets Plan
                </Link>
                {auth.uid ? (
                    <SignedInLinks profile={profile} />
                ) : (
                    <SignedOutLinks />
                )}
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default compose(connect(mapStateToProps))(Navbar);
