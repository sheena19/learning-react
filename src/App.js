import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Sheena', age: 25},
            {name: 'Chintan', age: 24},
            {name: 'Siddhant', age: 24}
        ]
    });

    const switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        setPersonsState({
            persons: [
                {name: 'Sheena', age: 25},
                {name: 'Chintan', age: 24},
                {name: newName, age: 45}
            ]
        });
    };

    const nameChangeHandler = (event) => {
        // console.log('Was clicked!');
        setPersonsState({
            persons: [
                {name: 'Sheena', age: 25},
                {name: 'Chintan', age: 24},
                {name: event.target.value, age: 45}
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hello I am react app</h1>
            <p>This is really working !</p>
            <button onClick={() => switchNameHandler('Prital!')}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                click={switchNameHandler.bind(this, 'Sunil')}/>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}/>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
                changed={nameChangeHandler}>
                My Hobbies: Gaming
            </Person>
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello I am rendered!'));
};

export default app;
