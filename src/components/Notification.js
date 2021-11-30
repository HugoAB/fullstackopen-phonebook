import React from 'react';

const Notification = ({ message, notificationClass }) => {
    return (
        <div className={notificationClass}>
            {message}
        </div>
    );
}

export default Notification;
