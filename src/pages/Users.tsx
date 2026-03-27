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
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id + " " + user.name + " " + user.email + " " + user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
