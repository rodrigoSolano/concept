import { useContext } from "react";
import { IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavbarContext } from "./context";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function NavbarBurgerButton() {
  const { showLinks, toggleLinks } = useContext(NavbarContext);

  return (
    <StyledIconButton onClick={() => toggleLinks()} size="small">
      {showLinks ? <CloseIcon /> : <MenuIcon />}
    </StyledIconButton>
  );
}
