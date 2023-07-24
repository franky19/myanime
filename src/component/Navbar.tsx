
import { NavContainer, NavLink, NavLinkItem, NavLinks, NavTitle} from "../styles/Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavContainer>
    <NavTitle>My Anime</NavTitle>
    <NavLinks>
      <NavLinkItem>
        <NavLink href="/">Home</NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink href="/">Collection</NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink href="/about">About</NavLink>
      </NavLinkItem>
    </NavLinks>
  </NavContainer>
  );
};

export default Navbar;