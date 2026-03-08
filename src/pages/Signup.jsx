import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signup, loading } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signup(fullname, email, password);
      toast.success("Account created");
      setFullname("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Signup failed");
      setPassword("");
    }
  }

  return (
    <div className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-start">
        <h1 className="text-white font-black tracking-tighter text-4xl">
          Create an account
        </h1>
        <Link to="/login" className="w-md text-white font-normal mt-5">
          <span className="underline">Login to your account</span> instead.
        </Link>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-10">
            <Input
              placeholder="John Doe"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
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
            {loading ? "Creating account..." : "Proceed to log in"}
          </Button>

          <p className="w-md text-white font-normal mt-5">
            By creating an account, you agree to Nairah’s{" "}
            <span className="underline">Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service</span>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
