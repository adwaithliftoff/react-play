import { useState } from "react";
import api from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const response = await api.post("/auth/login", { email, password });
    localStorage.setItem("accessToken", response.data.access_token);
  }

  return (
    <div className="max-w-sm mx-auto mt-24 flex flex-col gap-3">
      <form
        onSubmit={handleLogin}
        className="max-w-sm mx-auto mt-24 flex flex-col gap-3"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
