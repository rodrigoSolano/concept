import Navbar from "./Navbar";
import NavbarLeftItems from "./NavbarLeftItems";
import RightItems from "./NavbarRightItems";
import NavItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import NavbarBurgerButton from "./NavbarBurgerButton";
import NavbarItems from "./NavbarItems";

const all = Navbar;

all.Logo = NavbarLogo;
all.BurgerButton = NavbarBurgerButton;
all.Items = NavbarItems;
all.LeftItems = NavbarLeftItems;
all.RightItems = RightItems;
all.NavItem = NavItem;

export default Navbar