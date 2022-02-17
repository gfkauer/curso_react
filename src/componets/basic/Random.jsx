import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    return (
        <div>
            {Math.floor(Math.random() * (props.max - props.min))}
        </div>
    );
}
