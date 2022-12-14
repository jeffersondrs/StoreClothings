import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../assets/components/cart-icon/cart-icon.component";
import CartDropdown from "../../assets/components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { SiReactos } from "react-icons/si";
import { signOutUser } from "../../utils/firebase/firebase.utils";

export default function Navegation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-row w-full justify-between items-center h-20 mb-1">
        <Link className="logo-container h-full w-16 p-6" to="/">
          <div>
            <SiReactos className="w-6 h-6" />
          </div>
        </Link>
        <div className="flex flex-row items-center mr-6">
          <Link className="nav-link px-2 p-1 cursor-pointer" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link px-2 p-1 cursor-pointer" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span
              onClick={signOutUser}
              className="nav-link px-2 p-1 cursor-pointer bg-blue-900 m-2 hover:bg-blue-800 rounded-3xl text-white"
            >
              Sign Out
            </span>
          ) : (
            <Link
              className="nav-link px-2 p-1 cursor-pointer bg-blue-900 m-2 hover:bg-blue-800 rounded-3xl text-white"
              to="/auth"
            >
              Sign-in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
