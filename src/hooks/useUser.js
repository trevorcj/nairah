import { UserContext } from "../contexts/userContextInstance";
import { useContext } from "react";

export default function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}
