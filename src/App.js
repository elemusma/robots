import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';



// const App = () => {
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchField: event.target.value });

    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log(filteredRobots);
        return (
            <div className="tc" >
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots} />
                {/* <Cardlist robots={this.state.robots} /> */}
            </div>
        );
    }

}

export default App;