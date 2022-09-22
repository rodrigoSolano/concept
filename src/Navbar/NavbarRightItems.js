import { Box, styled } from "@mui/material";

const RightItemsContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  padding: "16px",
  // replace this styles
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    padding: "0",
    // replace this styles
    gap: "24px",
  },
}));

export default function RightItems({ children, ...props }) {
  return <RightItemsContainer>{children}</RightItemsContainer>;
}
