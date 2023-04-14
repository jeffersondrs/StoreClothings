import { Outlet } from "react-router-dom";
import CartIcon from "../../assets/components/cart-icon/cart-icon.component";
import CartDropdown from "../../assets/components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsOpen } from "../../store/cart/cart.selector";
import { SiReactos } from "react-icons/si";
import Footer from "../../assets/components/footer/Footer.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavegationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
  LinkContainer,
} from "./navegation.styles";

export default function Navegation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsOpen);
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
      <Footer />
    </>
  );
}
