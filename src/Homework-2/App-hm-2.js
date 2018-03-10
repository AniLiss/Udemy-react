import React, {Component} from 'react';
import ValidationComponent from './Homework-2/ValidationComponent';
import CharComponent from './Homework-2/CharComponent';

class App extends Component {

    state = {
        value: "0",
        string: ""
    };

    countCharacters = (event) => {
        this.setState({
            value: event.target.value.length,
            string: event.target.value
        })
    };

    onClickHandler = (index) => {
        let str = this.state.string.split('');
        console.log('str ', str);

        str.splice(index, 1);
        const a = str.join('');

        console.log('a ', a);

        this.setState({string: a})


    };

    render() {
        console.log('this.state.string ', this.state.string);
        let parsedString = this.state.string.split('');
        console.log('parsedString', parsedString);

        let characterList = parsedString.map((indexEl, index) => {
            return (
                <CharComponent
                    key={index}
                    letter={indexEl}
                    click={() => {
                        this.onClickHandler(index)
                    }}/>
            )
        });

        return (
            <div className='App'>
                <label>Form </label>
                <input type="text"
                       onChange={(event) => this.countCharacters(event)}
                       value={this.state.string}/>
                <p>Characters entered: {this.state.value}</p>
                <ValidationComponent value={this.state.value}/>

                {characterList}


            </div>
        );
    }
}

export default App;

