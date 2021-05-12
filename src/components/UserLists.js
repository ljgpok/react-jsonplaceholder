import React, { useState, useEffect } from "react";
import User from './User';
import { Link } from 'react-router-dom';

const API = "https://jsonplaceholder.typicode.com/users";

export default function UserLists() {

    const [ users, setUsers ] = useState([]);

    const getUsers = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUsers(data);
        });
      }
  
    useEffect(() => {
      getUsers(API);
    }, []);

    return (
        <div className="user-container">
            {users.length > 0 && users.map((user) => (
                <Link key={user.id} to={`/${user.id}`}>
                  <User key={user.id} {...user} />
                </Link>
            ))}
        </div>
    )
}
