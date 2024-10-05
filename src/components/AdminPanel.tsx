import React from 'react';
import { useAuth } from '../context/AuthContext';
import RoleManager from './RoleManager';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.name}</p>
      <button onClick={() => logout()}>Logout</button>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Manage Users</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <RoleManager />
    </div>
  );
};

export default AdminPanel;
