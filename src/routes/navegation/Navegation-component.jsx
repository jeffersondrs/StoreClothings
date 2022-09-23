import { Outlet, Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { SiReactos } from "react-icons/si";

export default function Navegation() {
  return (
    <>
      <div className="navegation flex flex-row w-screen justify-between items-center h-16 mb-6">
        <Link className="logo-container h-full w-16 p-6" to="/">
          <div className="m-2">
            <SiReactos className="w-6 h-6" />
          </div>
        </Link>
        <div className="h-full links-container flex flex-row justify-end w-1/2 items-center">
          <Link className="nav-link py-4 px-2 cursor-pointer" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link py-4 px-2 cursor-pointer" to="/shop">
            CONTACT
          </Link>
          <Link className="nav-link py-4 px-2 cursor-pointer bg-blue-900/60 m-2 hover:bg-blue-700/60x rounded-3xl text-white" to="/sign-in">
            Sign-in
          </Link>
          <Link className="nav-link py-4 px-2 cursor-pointer" to="/shop">
            <BiShoppingBag />
          </Link>
        </div>
      </div> 
      <Outlet />
    </>
  );
}
