import './App.css';
import { useState, useEffect } from 'react';
import { formatUserName } from './utils';

function App() {
  const [users, setUsers] = useState([]);
  // load data from server

  useEffect(()=> {
    let mounted = true;
    const getUsers = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => { 
          if (mounted) {
            setUsers(data);
          }
        })
    }
    getUsers();
  },[]);

  return (
    <>
      <p>Users:</p>
      <ul>
        { 
          users.map( user => (
            <li>{ user.name } { formatUserName(user.username) }</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
