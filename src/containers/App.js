import React from 'react';
import './App.css'
// import {robots} from '../robots'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


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
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
     
    return !robots.length ?
      <h1>Loading...</h1> :      
      (
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
// test for git only ss
export default App; 
