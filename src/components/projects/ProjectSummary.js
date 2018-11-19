import React from 'react';
import moment from 'moment';

const ProjectSummary = props => {
    const createdAt = new Date(props.project.createdAt['seconds'] * 1000);
    return (
        <div className="card project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{props.project.title}</span>
                <p>
                    Posted by: {props.project.authorFirstName}{' '}
                    {props.project.authorLastName}
                </p>
                <p className="grey-text">
                    {moment(createdAt).format('dddd, MMMM Do YYYY')}
                </p>
                <p className="grey-text">
                    {moment(createdAt).format('h:mm A')}
                </p>
            </div>
        </div>
    );
};

export default ProjectSummary;
