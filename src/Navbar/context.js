import { createContext, useState } from "react";

export const NavbarContext = createContext({});

export default function NavbarProvider({ children }) {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => setShowLinks((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ showLinks, toggleLinks }}>
      {children}
    </NavbarContext.Provider>
  );
}
