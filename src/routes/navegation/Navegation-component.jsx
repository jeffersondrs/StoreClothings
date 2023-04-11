import { Outlet } from "react-router-dom";
import CartIcon from "../../assets/components/cart-icon/cart-icon.component";
import CartDropdown from "../../assets/components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
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
  const currentUser = useSelector(selectCurrentUser);
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
          <NavLink to="/shop">Loja</NavLink>
          <NavLink to="/contact">Contato</NavLink>
          {currentUser ? (
            <LinkContainer onClick={signOutUser}>Sair</LinkContainer>
          ) : (
            <LinkContainer to="/auth">Entrar</LinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        
        {isCartOpen && <CartDropdown />}
      </NavegationContainer>
      <Outlet />
    </>
  );
}
