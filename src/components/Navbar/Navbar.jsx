import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user,signOutUser } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () =>{
    signOutUser()
  }
  const AuthenticationBtn = (
    <>
      <div>
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
      <div>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </>
  );
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>All Products</NavLink>
      </li>
      <li>
        <NavLink to='/my-products'>My Products</NavLink>
      </li>
      <li>
        <NavLink>My Bids</NavLink>
      </li>
      <li>
        <NavLink>Create Products</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" btn-ghost text-xl">Smart Deals</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-end gap-3">{AuthenticationBtn}</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Navbar;
