import { Button, Link, Stack, Typography } from "@mui/material";
import Navbar from "./Navbar";

function App() {
  return (
    <Navbar>
      <Stack direction="row" spacing="0" alignItems="center">
        <Navbar.Logo src="https://bootswatch.com/_assets/img/logo.svg" />
        <Typography color="black" variant="body1" fontSize="1.25rem">
          Bootswatch
        </Typography>
      </Stack>
      <Navbar.BurgerButton />
      <Navbar.Items justifyContent="space-between">
        <Navbar.LeftItems direction="row" spacing="16px" alignItems="center">
          <Navbar.NavItem>
            <Link href="https://www.google.com" target="_blank">
              <Typography color="black">Themes</Typography>
            </Link>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Link href="https://www.google.com" target="_blank">
              <Typography color="black">Help</Typography>
            </Link>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Link href="https://www.google.com" target="_blank">
              <Typography color="black">Blog</Typography>
            </Link>
          </Navbar.NavItem>
        </Navbar.LeftItems>
        <Navbar.RightItems>
          <Button variant="contained">Github</Button>
          <Button variant="contained">Twitter</Button>
        </Navbar.RightItems>
      </Navbar.Items>
    </Navbar>
  );
}

export default App;
