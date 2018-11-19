import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = props => {
    const { auth } = props;
    if (!auth.uid) {
        return <Redirect to="/sign-in" />;
    }
    return (
        props.project && (
            <div className="container section project-details">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">
                            {props.project.title}
                        </span>
                        <p>{props.project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>
                            Posted by: {props.project.authorFirstName}{' '}
                            {props.project.authorLastName}
                        </div>
                        <div>
                            {moment(
                                new Date(
                                    props.project.createdAt.seconds * 1000,
                                ),
                            ).format('dddd, MMMM Do YYYY')}
                        </div>
                        <div>
                            {moment(
                                new Date(
                                    props.project.createdAt.seconds * 1000,
                                ),
                            ).format('h:mm A')}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }]),
)(ProjectDetails);
