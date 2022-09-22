import { Box, styled } from "@mui/material";
import NavbarProvider from "./context";

const NavbarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 16px",
  alignItems: "center",
  position: "relative",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    padding: "16px 24px",
  },
  // replace this styles
  background: "#F2F4F9",
  filter: "drop-shadow(0px 1px 0px #7A92C5)",
}));

const NavbarContainer = styled(Box)(({ theme, maxWidth }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
}));

export default function Navbar({ children, maxWidth = "xl" }) {
  return (
    <NavbarProvider>
      <NavbarWrapper id="navbar">
        <NavbarContainer maxWidth={maxWidth}>{children}</NavbarContainer>
      </NavbarWrapper>
    </NavbarProvider>
  );
}
