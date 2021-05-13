import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {

  const { id } = useParams();

  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchId = async () => {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await resp.json();
      setUsers(data);
      console.log(data);
    };
    fetchId();
  }, [id]);

  const { name, username, email, phone, company, website, address } = users;
  const { street, suite, city, zipcode } = address || {};

  return (
    <div className="user-container" >
      <div className="userinfo">
        <h1>User Info</h1>
        <p> - Name: {name} <br /></p>
        <p> - Email: {email} <br /></p>
        <p> - Website: {website} <br /></p>
        <p> - Phone: {phone} <br /></p>
        <p> - Username: {username} <br /></p>
        <p> - Company: {company ? company.name : ''} <br /></p> 
        <p> - Street :  </p> 
        <ul>
          <li> {street} </li>
          <li> {suite} </li>
          <li> {city} </li>
          <li> {zipcode} </li>
        </ul>
    </div>
  </div>
  );
};

export default Users;
