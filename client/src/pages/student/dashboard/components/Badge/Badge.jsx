import React from 'react';
import './Badge.css';

const Badge = ({ status }) => {
    let backgroundColor;

    switch (status) {
        case 'Missed Deadline':
            backgroundColor = 'red';
            break;
        case 'Submitted':
            backgroundColor = 'green';
            break;
        case 'In Progress':
            backgroundColor = 'orange';
            break;
        default:
            backgroundColor = 'gray';
    }

    return (
        <span className="badge" style={{ backgroundColor }}>
            {status}
        </span>
    );
};

export default Badge;
