import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating indigo darken-4">
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

const mapStateToProps = state => {
    return {
        user: state.firestore,
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignedInLinks);
