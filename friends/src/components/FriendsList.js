import React from 'react';
import Friend from './Friend';


export default function FriendsList(props){
    return (
        <div>
            {props.friends.map(friend => <Friend friend={friend} key={friend.id} setUpdateForm={props.setUpdateForm} deleteFriend={props.deleteFriend}  />)}
        </div>
    )
}