import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
    };
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    render() {
        const { auth, authError } = this.props;
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            required={true}
                            autoComplete="off"
                            type="text"
                            id="firstName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            autoComplete="off"
                            id="lastName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            autoComplete="off"
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            autoComplete="off"
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn btn indigo darken-4">
                            Sign Up!
                        </button>
                        <div className="red-text center">
                            {authError ? <p>**{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: user => dispatch(signUp(user)),
    };
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);
