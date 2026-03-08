import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import ProtectedRoute from "./pages/ProtectedRoute";

// TODO:
// - Use toast when login is successful ✅
// - fix view to scrollable when screen size is small ✅
// - Implement form validation / error in forms

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
