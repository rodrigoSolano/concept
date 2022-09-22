import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { NavbarContext } from "./context";

const NavbarItemsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show" && prop !== "isDesktop",
})(({ theme, show }) => ({
  width: "100%",
  display: show ? "flex" : "none",
  flexDirection: "column-reverse",
  gap: "0",
  position: "absolute",
  top: "100%",
  left: "0px",
  // replace this styles
  backgroundColor: "#F2F4F9",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    top: "0px",
    left: "0px",
    marginLeft: "40px",
    // replace this styles
    gap: "16px",
    backgroundColor: "transparent",
  },
}));

export default function NavbarItems({ children, ...props }) {
  const { showLinks } = useContext(NavbarContext);
  return (
    <NavbarItemsContainer show={showLinks} {...props}>
      {children}
    </NavbarItemsContainer>
  );
}
