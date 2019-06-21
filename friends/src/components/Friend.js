import React from 'react';

export default function Friend(props){
    return(
        <div>
            <h4>{props.friend.name}</h4>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>update</button>
            <button>delete</button>
        </div>
    )
}