import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

//parent function
class App extends Component {
    constructor(){
        super()
        //this will change our app,component that will change
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https:jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users =>{
            this.setState({robots: users});

        })    }
    
    //every time there is a change, run function and update the value of searchField
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    
    //pass robots and searchField as props
    render(){
        const filterRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
         return (
        <div className="tc">
        <h1> RoboFriends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        //allow the search box to be available when scrolling 
        <Scroll>
        <CardList robots={filterRobots} />
        </Scroll>
        </div>
    );  
    }
}

export default App;