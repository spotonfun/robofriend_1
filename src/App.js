import React from 'react';
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'

class App  extends React.Component {

  constructor() {
    super();
    this.state = {
      robots : robots,
      searchfield: ''
    }
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

    return (
      <div className="tc">
        <h1>RoboFriend</h1>
        <p>welcome to robofriend app</p>
        <SearchBox searchChange={this.onSearchChangeRRR}/>
        <CardList robots={filterRobots}/>
      </div>
    );
    }
}

export default App;
