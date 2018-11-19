import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    };
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to="/sign-in" />;
        }
        return (
            <div className="container">
                <form
                    autoComplete="off"
                    className="white"
                    onSubmit={this.handleSubmit}
                >
                    <h5 className="grey-text text-darken-3">
                        Create New Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea
                            className="materialize-textarea"
                            id="content"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn btn indigo darken-4">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project)),
    };
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateProject);
