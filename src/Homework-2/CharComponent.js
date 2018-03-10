import React from 'react';

const charComponentStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'

};

const charComponent = (props) => {
    return (
        <div onClick={props.click} style={charComponentStyle}>{props.letter}</div>
    )
};

export default charComponent;