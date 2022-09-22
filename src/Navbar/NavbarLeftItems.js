import { Box, styled } from "@mui/material";

const LeftItemsContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  flexDirection: "column",
  gap: "0",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    // replace this styles
    gap: "24px",
  },
}));

export default function NavbarLeftItems({ children, ...props }) {
  return <LeftItemsContainer {...props}>{children}</LeftItemsContainer>;
}
