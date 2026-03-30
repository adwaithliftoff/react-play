import { useParams } from "react-router-dom";
import api from "../api/axios";
import { useEffect, useState } from "react";

function UserDetails() {
  interface User {
    id: number;
    email: string;
    name: string;
    role: string;
  }

  const { id } = useParams();
  const [details, setDetails] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await api.get(`/users/${id}`);
      console.log(response.data);
      setDetails(response.data);
    };
    fetchUser();
  }, []);

  return (
    <div className="p-6 max-w">
      <h2>User Details</h2>
      {details ? (
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">ID:</span> {details.id}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {details.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {details.email}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {details.role}
          </p>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default UserDetails;
