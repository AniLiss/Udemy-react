import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

const btnColor = {
    backgroundColor: '#ccc',
    borderRadius: '2px',
    padding: '5px 15px'
}

class App extends Component {

    state = {
        persons: [
            {name: 'Nikita', age: 23},
            {name: 'Lisa', age: 23}
        ],

        otherState: 'Some other value'
    };

    switchHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 46},
                {name: 'Lisa', age: 23}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 26}
            ]
        })
    };

    render() {
        return (
            <div className='App'>
                <p>
                    <button onClick={() => this.switchHandler('Maximilian!!')}>Switch Name</button>
                </p>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchHandler.bind(this, 'Emma')}
                    changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

                <p>
                    <button style={btnColor} onClick={this.switchHandler.bind(this, 'Vlado')}>click</button>
                </p>
            </div>
        );
    }
}

export default App;

