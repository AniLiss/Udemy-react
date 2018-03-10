import React, {Component} from 'react';

const validation = (props) => {
    const MIN_VALUE = 5;

    return (
        (props.value <= MIN_VALUE) ?
            <p>Too Short</p>
            : <p>Long Enoughа</p>
    )

};

export default validation;