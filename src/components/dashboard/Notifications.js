import React from 'react';
import moment from 'moment';

const Notifications = props => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications &&
                            notifications.map(note => {
                                return (
                                    <li key={note.id}>
                                        <span className="indigo-text text-darken-4">
                                            {note.user}
                                        </span>
                                        <span>
                                            {' '}
                                            {note.content.toLowerCase()}
                                        </span>
                                        <div className="grey-text">
                                            {moment(
                                                note.time.toDate(),
                                            ).fromNow()}
                                        </div>
                                        <br />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
