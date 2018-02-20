import React from 'react';

const userInput = (props) => {
    return (
        <input onChange={props.change} value={props.name} className="user-input" type="text" />
    )
};

export default userInput;