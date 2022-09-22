import { Box, styled } from "@mui/material";

const NavbarItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px 18px",
  // replace this styles
  borderBottom: "1px solid rgba(122, 146, 197, 0.32)",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    padding: "0",
    // replace this styles
    borderBottom: "none",
  },
}));

export default function NavItem({ children }) {
  return <NavbarItemContainer>{children}</NavbarItemContainer>;
}
