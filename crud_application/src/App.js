import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Homepage from './HomePage';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users data from API when the app loads
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  // Add user function
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Update user function
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  // Delete user function
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Homepage users={users} deleteUser={deleteUser} />}
        />
        <Route
          path="/add-user"
          element={<AddUser addUser={addUser} />}
        />
        <Route
          path="/edit-user/:id"
          element={<EditUser users={users} updateUser={updateUser} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
