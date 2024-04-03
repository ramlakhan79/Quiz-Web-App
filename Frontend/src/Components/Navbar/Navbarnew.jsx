import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logouthandler = () => {
    if (userName !== null) {
      dispatch(Logouthandleraction());
      toast(`${userName} Successfully Logout `, {
        type: "success",
      });
    }
    if (adminName == "Ramlakhan Lodhi") {
      toast(`Ramlakhan Lodhi Successfully Logout `, {
        type: "success",
      });
      dispatch(Logouthandleraction());
    }
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };
  return (
    <div className="w-11/12 h-24 m-auto flex bg-slate-50 mb-8 ">
      <Link to="/" className="w-4/12 flex ">
        <img
          className="rounded-md"
          src="./quiz.png"
          alt="logo"
        />
      </Link>

      <div className="w-2/5 ml-14 ">
        
      </div>

      <div className="w-3/12 flex justify-around py-4 mt-2">
        {" "}
        <div className="flex ">
          <div className=" pt-2">
            {userName !== null || adminName !== null ? (
              <div className="flex ">
                <div
                  className="font-medium cursor-pointer text-xl bg-gray-200 border border-transparent hover:border-blue-500 rounded-md p-2 "
                  onClick={profilenavigate}
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  PROFILE
                </div>{" "}
                <div
                  onClick={() => {
                    logouthandler();
                  }}
                  className="ml-4 font-medium cursor-pointer text-xl bg-gray-200 border border-transparent hover:border-blue-500 rounded-md p-2 "
                >
                  LOGOUT
                </div>
              </div>
            ) : (
              <Link to="/register" className="font-medium mt-16 ml-24 text-2xl bg-gray-200 border border-transparent hover:border-blue-500 rounded-md p-2">
                SIGN IN
              </Link>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-10 mt-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
