import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Homepage = ({ users, deleteUser }) => {
    return (
        <div className='homepage'>
            <div className='homepage-header'>
                <h1>Users</h1>
                <Button variant="contained" color="primary" className='add-button'>
                    <Link to="/add-user" style={{ textDecoration: 'none', color: 'white' }}>
                        Add User
                    </Link>
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table className='user-table'>
                    <TableHead className='table-header'>
                        <TableRow className='table-header'>
                            <TableCell sx={{fontWeight:"bold"}} >Name</TableCell>
                            <TableCell sx={{fontWeight:"bold"}} >Email</TableCell>
                            <TableCell sx={{fontWeight:"bold"}} >Phone</TableCell>
                            <TableCell sx={{fontWeight:"bold", textAlign:'center'}} >Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell className='actions'>
                                    <Button variant="outlined" className='edit-btn'>
                                        <Link to={`/edit-user/${user.id}`}>Edit</Link>
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => deleteUser(user.id)}
                                        className='delete-btn'
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default Homepage;
