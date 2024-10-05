import React, { useEffect, useState } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getUsers, updateUserRoles } from '../utils/api';

const RoleManager = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const handleRoleUpdate = async (userId: string, newRoles: string[]) => {
    try {
      await updateUserRoles(userId, newRoles);
      fetchUsers(); // Refresh data after role update
    } catch (error) {
      console.error('Error updating roles', error);
    }
  };

  return (
    <div>
      <h2>Manage User Roles</h2>
      <DataTable value={users} responsiveLayout="scroll">
        <Column field="username" header="Username" />
        <Column field="email" header="Email" />
        <Column
          header="Roles"
          body={(rowData) => (
            <div>
              {/* Replace with your role-editing component */}
              {rowData.roles.join(', ')}
              <button onClick={() => handleRoleUpdate(rowData._id, ['admin'])}>Make Admin</button>
            </div>
          )}
        />
      </DataTable>
    </div>
  );
};

export default RoleManager;
