import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Adjust based on the backend

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get users
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    throw error;
  }
};

// Function to update user roles
export const updateUserRoles = async (userId: string, roles: string[]) => {
  try {
    const response = await api.put(`/users/${userId}/roles`, { roles });
    return response.data;
  } catch (error) {
    console.error('Error updating user roles', error);
    throw error;
  }
};
