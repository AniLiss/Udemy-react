import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <div onClick={props.click}>I'm {props.name} {props.age}</div>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
