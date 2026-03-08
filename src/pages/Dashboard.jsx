import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

import Button from "../components/Button";

function Dashboard() {
  const { user, logout } = useUser();
  const displayName =
    user?.fullname || user?.email?.split("@")[0] || "Authenticated";
  const navigate = useNavigate();

  async function handleLogOut() {
    await logout();

    navigate("/login");
  }

  return (
    <div className="w-full min-h-screen overflow-y-auto px-10 py-12 ">
      <div className="flex gap-5 items-center justify-between">
        <h1 className="text-white font-black tracking-tighter text-4xl antialiased md:subpixel-antialiased">
          Welcome, {displayName} 👋🏽
        </h1>

        <Button width={100} onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
