import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-stone-700 h-[100px] w-full flex items-center justify-between px-10">
        <Link to="/">
          <div className=" text-white font-bold ">TICKET APP</div>
        </Link>
        <div className=" flex justify-around w-[600px] ">
          <Link to="/">
            <div className="text-white font-bold">HOME</div>
          </Link>
          <Link to="/list">
            <div className="text-white font-bold">TICKET LIST</div>
          </Link>
          <Link to="/profile">
            <div className="text-white font-bold">YOUR TICKET</div>
          </Link>
        </div>
        <div className="flex justify-end items-center gap-2 ">
          <Link to="/login">
            <button
              className="bg-stone-500 text-white font-bold w-[100px] p-[15px] rounded-xl gap-3"
              type="button"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              className="bg-stone-500 text-white font-bold w-[100px] p-[15px] rounded-xl gap-3"
              type="button"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
