import React from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
//import Friend from './components/Friend';
import './App.css';

class App extends React.Component {
  state = {
    friends: [],
    error: '',
    activeFriend: null
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => this.setState({error: err}))
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => this.setState( {friends: res.data}))
      .catch(err => console.log(err))
}

updateFriend = (e, friend) => {
  e.preventDefault();
  axios 
    .put(`http://localhost:5000/friend/${friend.id}`, friend)
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err))
}

setUpdateForm = (e, friend) => {
  e.preventDefault();
  this.setState({ activeFriend: friend})
}
  
  render() {
    return (
      <div className="App">
        <h2>Friends List</h2>
        <FriendForm addFriend={this.addFriend} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend}  />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
} 

export default App;
