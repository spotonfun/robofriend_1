import React from 'react';
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'

class App  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      robots : [],
      searchfield: ''
    }
  }

  componentDidMount() { //no arrow function as it's part of react
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})});
    
  }

  onSearchChangeRRR = (event) => { //use such syntax to make sure "this" refers to App, not calling function
    // console.log(event.target.value);
    // this.state.searchfield = event.target.value; /// DONT DO IT THAT WAY!    
    this.setState({searchfield: event.target.value});
  }

  render () {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    // console.log(filterRobots);
    if(this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriend</h1>
          <p>welcome to robofriend app</p>
          <SearchBox searchChange={this.onSearchChangeRRR}/>
          <Scroll>
            <CardList robots={filterRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App; 
