import React, {Component} from 'react';
import './Classwork/App.css';
import './Homework/User/User.css';
import UserOutput from './Homework/User/UserOutput';
import UserInput from './Homework/User/UserInput';

class App extends Component {

    state = {
        users: {
            user1: {
                name: 'User1',
                age: 23
            },

            user2: {
                name: 'User2',
                age: 33
            }
        },
            status: [
                {active: 'online'},
                {inactive: 'offline'}
            ]

    };

    eventHandler = (newName1, newName2) => {
        this.setState({
            users: {
                user1: {
                    name: newName1,
                    age: 23
                },

                user2: {
                    name: newName2,
                    age: 33
                },
            },

            status: [
                {active: 'offline'},
                {inactive: 'online'}
            ]
        });
    }

        nameChangeHandler1 = (event) => {
            event.persist();
            this.setState({
                users: {
                    user1: {
                        name: event.target.value,
                        age: 23
                    },

                    user2: {
                        name: this.state.users.user2.name,
                        age: 33
                    }
                }
            })
        };

    nameChangeHandler2 = (event) => {
            event.persist();
            this.setState({
                users: {
                    user1: {
                        name: this.state.users.user1.name,
                        age: 23
                    },

                    user2: {
                        name: event.target.value,
                        age: 33
                    }
                }
            })
        };


        render()
        {
            return (
                <div className='App'>

                    <div className="user">
                        <UserOutput
                            name={this.state.users.user1.name}
                            status={this.state.status[0].active}
                            click={this.eventHandler.bind(this, "Lisa", 'Ilia')}/>

                        <UserInput change={this.nameChangeHandler1}/>
                    </div>

                    <div className="user">
                        <UserOutput
                            name={this.state.users.user2.name}
                            status={this.state.status[1].inactive}/>

                        <UserInput change={this.nameChangeHandler2}/>
                    </div>

                    <p>
                        <button onClick={() => this.eventHandler("User1", 'User2')}>Reset</button>
                    </p>
                </div>
            );
        }
    }

    export default App;

