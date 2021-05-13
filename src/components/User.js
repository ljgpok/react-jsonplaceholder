import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ id, name, username, website }) => {

    const webAddress = `http://${website}`;

    return (
        <div className="user">
                <div id="profileImage"> {name ? name[0] : ''}</div>
                <div className="user-info">
                    <h3>{name}</h3>
                    <h2>@{username}</h2>
                    <a href={webAddress} target="_blank" rel='noreferrer'>{webAddress}</a> <br />
                </div>
                <Link to={`/${id}`}><button type="button" className="button">More Details</button></Link>
        </div>
    )
}

export default User;