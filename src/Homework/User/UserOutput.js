import React from 'react';

const userOutput = (props) => {
    return (
        <div className="user-output">
            <p>{props.name}</p>
            <p onClick={props.click}>{props.status}</p>
        </div>
    )
};

export default userOutput;