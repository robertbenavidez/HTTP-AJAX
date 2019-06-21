import React from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import './App.css';

class App extends React.Component {
  state = {
    friends: [],
    error: ''
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => this.setState({error: err}))
  }
  
  render() {
    return (
      <div className="App">
        <h2>Friends List</h2>
        <FriendsList friends friends={this.state.friends} />
      </div>
    );
  }
} 

export default App;
