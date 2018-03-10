import React, {Component} from 'react';
import './Classwork/App.css';
import './Homework/User/User.css';
import UserOutput from './Homework/User/UserOutput';
import UserInput from './Homework/User/UserInput';

class App extends Component {

    state = {
        users: [
            {
                id: 1,
                name: 'User1',
                age: 23,
                status: 'offline'
            },

            {
                id: 2,
                name: 'User2',
                age: 33,
                status: 'online'
            }
        ],
        // status: [
        //     {active: 'online'},
        //     {inactive: 'offline'}
        // ],

        showUsers: false
    };

    eventHandler = (newName1, newName2) => {
        this.setState({
            users: [
                {
                    id: 1,
                    name: newName1,
                    age: 23,
                    status: 'offline'
                },

                {
                    id: 2,
                    name: newName2,
                    age: 33,
                    status: 'online'
                }
            ],

            status: [
                {active: 'offline'},
                {inactive: 'online'}
            ]
        });
    };

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

    changeNameHandler = (event, index) => {
        const usersIndex = this.state.users.findIndex(p => {
            return p.id === index;
        });

        const user = {
            ...this.state.users[usersIndex]
        };

        user.name = event.target.value;

        const users = [...this.state.users];
        users[usersIndex] = user;

        this.setState({users: users})
    }

    showUsers = () => {
        this.setState({showUsers: !this.state.showUsers})
    };

    deletePersonHandler = (userIndex) => {
        // const users = this.state.users.slice();
        const users = [...this.state.users];
        users.splice(userIndex, 1);
        this.setState({users: users})
    };

    render() {
        let users = null;

        if (this.state.showUsers) {
            users = (
                <div className="wrapper">
                    <section className="user-list">

                        {this.state.users.map((user, index) => {
                            console.log(user);
                            return (
                                <div>
                                    <UserOutput
                                        className="user"
                                        key={user.id}
                                        name={user.name}
                                        status={user.status}/>

                                    <p>
                                        <button
                                            onClick={() => this.deletePersonHandler(index)}>Delete user
                                        </button>
                                    </p>

                                    <UserInput
                                        changed={(event) => this.changeNameHandler(event, user.id)}/>
                                </div>
                            )

                        })
                        }

                        {/*<UserOutput*/}
                        {/*className="user"*/}
                        {/*name={this.state.users[0].user1.name}*/}
                        {/*status={this.state.status[0].active}*/}
                        {/*click={this.eventHandler.bind(this, "Lisa", 'Ilia')}/>*/}

                        {/*<UserInput change={this.nameChangeHandler1}/>*/}

                        {/*<UserOutput*/}
                        {/*className="user"*/}
                        {/*name={this.state.users[1].user2.name}*/}
                        {/*status={this.state.status[1].inactive}/>*/}

                        {/*<UserInput change={this.nameChangeHandler2}/>*/}

                        <p>
                            <button onClick={() => this.eventHandler("User1", 'User2')}>Reset</button>
                        </p>
                    </section>
                </div>
            )
        }

        return (
            <div className='App'>
                {users}
                <p>
                    <button onClick={() => this.showUsers()}>Show Users</button>
                </p>
            </div>
        );
    }
}

export default App;

