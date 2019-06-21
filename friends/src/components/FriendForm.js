import React, { Component } from 'react';

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: '',
                id: 0
            },
            active: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
            this.setState({ friend: this.props.activeFriend, active: true })
        }
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({ friend: {...prevState.friend, [e.target.name]: e.target.value} }))
    }

    submitHandler = (e, friend) => {
        if (this.state.active) {
            this.props.updateFriend(e, this.state.friend)
        } else {
           this.props.addFriend(e, this.state.friend)
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: '',
            }, active: false
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name='name' value={this.state.friend.name} type='text' placeholder='Name' onChange={this.changeHandler} required />
                    <input name='age' value={this.state.friend.age} type='number' placeholder='Age' onChange={this.changeHandler} required />
                    <input name='email' value={this.state.friend.email} type='email' placeholder='Email' onChange={this.changeHandler} required />
                    <button>{`${this.state.active ? 'Update' : 'Add Friend'}`}</button>
                </form>
            </div>
        )
    }
}