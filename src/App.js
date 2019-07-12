import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Sheena', age: 25},
            {name: 'Chintan', age: 24},
            {name: 'Siddhant', age: 24}
        ]
    };

    switchNameHandler = () => {
        // console.log('Was clicked!');
        this.setState({persons: })
      this.state.persons[0].name = 'Sheena Shah';
    };

    render() {
        return (
            <div className="App">
                <h1>Hello I am react app</h1>
                <p>This is really working !</p>
                <button onClick={this.switchNameHandler }>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                    My Hobbies: Gaming
                </Person>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello I am rendered!'));
    }
}

export default App;
