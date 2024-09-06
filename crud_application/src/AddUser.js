import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const AddUser = ({ addUser }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
    };
    addUser(newUser);
    navigate('/');
  };

  return (
    <Container maxWidth="sm" className='container'>
      <Typography variant="h4" component="h2" gutterBottom sx={{textAlign:'center',fontWeight:'bold'}}>
        Add User
      </Typography>
      <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Phone"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </Box>
    </Container>
  );
};

export default AddUser;
