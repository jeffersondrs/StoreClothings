import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../assets/components/cart-icon/cart-icon.component";
import CartDropdown from "../../assets/components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { SiReactos } from "react-icons/si";
import { SlMenu } from "react-icons/sl";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavegationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
  LinkContainer,
  MenuLinksContainer,
} from "./navegation.styles";

export default function Navegation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavegationContainer>
        <LogoContainer to="/">
          <div>
            <SiReactos className="w-6 h-6" />
          </div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <LinkContainer onClick={signOutUser}>Sign Out</LinkContainer>
          ) : (
            <LinkContainer to="/auth">Sign-in</LinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        <MenuLinksContainer>
          <SlMenu className="w-6 h-6" />
        </MenuLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavegationContainer>
      <Outlet />
    </>
  );
}
