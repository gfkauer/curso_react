import React from 'react';

export default function (props) {
    return (
        <div>
            {Math.floor(Math.random() * (props.max - props.min))}
        </div>
    );
}
