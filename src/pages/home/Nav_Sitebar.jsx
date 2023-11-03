import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../providers/AuhtProvider";

const Nav_Sitebar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
    .then((res) => console.log(res))
  .catch((e) => console.log(e.message))
  }


  return (
    <div className="drawer z-40 drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" text-[#333333] text-xl p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <div className="mb-3">
            {" "}
            <p className="text-xl ">Currency</p>
          </div>
          <div className="w-full h-0.5 bg-[#cccccc]"></div>

          <div className="my-6 flex flex-col gap-2">
            <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
              <NavLink>Account</NavLink>
            </li>
            <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
              <NavLink>Account</NavLink>
            </li>
            <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
              <NavLink>Account</NavLink>
            </li>
            <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
              <NavLink>Account</NavLink>
            </li>
          </div>

          <div className="w-full mb-3 h-0.5 bg-[#cccccc]"></div>

          <div className="flex flex-col gap-2">
            <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
              <NavLink to={"/register"}>Create Account</NavLink>
            </li>
            {user?.email ? (
              <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
                <NavLink onClick={handleLogOut}>Log Out</NavLink>
              </li>
            ) : (
              <li className="hover:text-[#c7a17a] hover:underline cursor-pointer">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav_Sitebar;
