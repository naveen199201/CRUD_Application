import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const EditUser = ({ users, updateUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const userToEdit = users.find(user => user.id === parseInt(id));
    if (userToEdit) {
      setFormData(userToEdit);
    }
  }, [id, users]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    navigate('/');
  };

  return (
    <Container maxWidth="sm"  className='container'>
      <Typography variant="h4" component="h2" gutterBottom sx={{textAlign:'center',fontWeight:'bold'}}>
        Edit User
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
          Update User
        </Button>
      </Box>
    </Container>
  );
};

export default EditUser;
