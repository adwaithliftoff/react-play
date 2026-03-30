import { useEffect, useState } from "react";
import api from "../api/axios";

function Users() {
  interface User {
    id: number;
    email: string;
    name: string;
    role: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2>All Users</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-black/50">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
