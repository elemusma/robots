import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';
import './App.css';



// const App = () => {
class App extends Component {
    constructor() {
        super()
        this.state = {
            // robots: robots,
            robots: [],
            searchField: ''
        }
        // console.log('1');
    }

    componentDidMount() {
        // console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        // this.setState({ robots: robots });
        // console.log('2');
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchField: event.target.value });

    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log('3');
        // console.log(filteredRobots);
        return (
            <div className="tc" >
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots} />
                </Scroll>
                {/* <Cardlist robots={this.state.robots} /> */}
            </div>
        );
    }

}

export default App;