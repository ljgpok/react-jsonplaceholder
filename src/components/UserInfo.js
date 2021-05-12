import React,{ useEffect } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { id } = useParams();

  const [users, setUsers] = React.useState([]);

    useEffect(() => {
    const consulta = async () => {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await resp.json();
      setUsers(data);
      console.log(data);
    };
    consulta();
  }, [id]);

  return (
    <>
      <ul>
        <h1>User Info</h1>
        <li> Name: {users.name} <br /></li>
        <li> Email: {users.email} <br /></li>
        <li> Website: {users.website} <br /></li>
        <li> Phone: {users.phone} <br /></li>
        <li> Username: {users.username} <br /></li>
      </ul>
    </>
  );
};

export default Users;
