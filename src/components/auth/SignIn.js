import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        password: '',
        email: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
    };
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) {
            return <Redirect to="/" />;
        }
        return (
            <div className="container">
                <form
                    autoComplete="off"
                    className="white"
                    onSubmit={this.handleSubmit}
                >
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn btn indigo darken-4">
                            Log In
                        </button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds)),
    };
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);
