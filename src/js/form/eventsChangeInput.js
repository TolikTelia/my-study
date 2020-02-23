import React from 'react';

const EventsChangeInput = () => {
    return (
        <div onCopy={(e) => {e.preventDefault();alert('no!')}}>
            2
            <input type="text" />
        </div>
    );
};

export default EventsChangeInput;