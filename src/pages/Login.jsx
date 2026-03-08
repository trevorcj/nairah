import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { login, loading } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(email, password);
      toast.success("Successfully logged in!");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Login failed");
      setPassword("");
    }
  }

  return (
    <div className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-start">
        <h1 className="text-white font-black tracking-tighter text-4xl">
          Login to your account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-10">
            <Input
              type="email"
              placeholder="johndoe@money.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" classnames="mt-10" disabled={loading}>
            {loading ? "Logging you in..." : "Proceed to dashboard 🎉"}
          </Button>
        </form>

        <Link to="/signup" className="w-md text-white font-normal mt-5">
          Don't have an account?{" "}
          <span className="underline">Create an account</span>.
        </Link>
      </div>
    </div>
  );
}

export default Login;
