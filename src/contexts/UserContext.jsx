import { useState } from "react";
import axios from "axios";
import { UserContext } from "./userContextInstance";

// axios instance
const api = axios.create({
  baseURL: "https://api.mantahq.com/api/workflow/trevor/nairah/nairah-auth",
});

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const email = sessionStorage.getItem("email");
    return email ? { email } : null;
  });
  const [loading, setLoading] = useState(false);

  async function login(email, password) {
    setLoading(true);
    try {
      const { data } = await api.post("/login", { email, password });
      const nextToken = data?.token || null;
      const nextUser = { email };

      setToken(nextToken);
      setUser(nextUser);

      if (nextToken) sessionStorage.setItem("token", nextToken);
      sessionStorage.setItem("email", email);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.message ||
        err.message ||
        "Authentication failed";

      throw new Error(message);
    } finally {
      setLoading(false);
    }
  }

  async function signup(fullname, email, password) {
    setLoading(true);
    try {
      const { data } = await api.post("/signup", { fullname, email, password });
      const nextToken = data?.token || null;
      const nextUser = { email };

      setToken(nextToken);
      setUser(nextUser);

      if (nextToken) sessionStorage.setItem("token", nextToken);
      sessionStorage.setItem("email", email);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.message ||
        err.message ||
        "Authentication failed";

      throw new Error(message);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        login,
        signup,
        logout,
        loading,
      }}>
      {children}
    </UserContext.Provider>
  );
}
