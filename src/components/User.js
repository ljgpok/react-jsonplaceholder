import React from 'react';
import Button from './Button'



const User = ({name, username, website }) => {
    return (
        <div className="user">
                <div id="profileImage"></div>
                <div className="user-info">
                    <h3>{name}</h3>
                    <h2>@{username}</h2>
                    <span>{website}</span>
                </div>
                <Button />
        </div>
    )
}

export default User;