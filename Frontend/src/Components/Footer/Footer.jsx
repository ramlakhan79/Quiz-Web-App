import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer xl:mt-12 bg-slate-700 tracking-widest">
      <div className="footer-main w-full xl:w-4/5 xl:m-auto mb-2 p-4 xl:flex">
        <div className="flex w-full justify-between xl:w-6/12">
          <div className="footer-col-1 w-6/12 xl:w-full space-y-4">
            <h3
              className="text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "teal",
                fontWeight: "bolder",
              }}
            >
              MERN-Quiz-App
            </h3>
            <p className="text-white cursor-pointer text-xs pr-4 xl:text-sm hover:text-teal-500">
              WHERE PASSION MEETS PERFECTION !
            </p>
          </div>
          <div className="footer-col-2 w-6/12 xl:w-full mr-2 md:mr-0 space-y-4">
            <h3
              className="text-white  text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "teal",
                fontWeight: "bolder",
              }}
            >
              quiz
            </h3>
            <Link
              to="/"
              className="no-underline text-white text-xs block xl:text-sm hover:text-teal-500"
            >
              All Quiz
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between my-4 xl:w-6/12 xl:my-0">
          <div className="footer-col-3 w-6/12 xl:w-full space-y-4">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "teal",
                fontWeight: "bolder",
              }}
            >
              follow
            </h3>
            <div className="flex items-center">
              <i className="fa fa-instagram text-white mr-1"></i>
              <a
                href="#"
                className="no-underline text-white text-xs block xl:text-sm hover:text-teal-500"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center">
              <i className="fa fa-linkedin text-white mr-1"></i>
              <a
                href="#"
                className="no-underline text-white text-xs block xl:text-sm hover:text-teal-500"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-col-4 w-6/12 xl:w-full space-y-4 mr-2 md:mr-0">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "teal",
                fontWeight: "bolder",
              }}
            >
              Contact
            </h3>
            <p className="flex items-center my-1">
              <i
                className="fa fa-home text-white text-sm"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm hover:text-teal-500">
                Bhopal, Madhya Pradesh
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-envelope text-white text-xs"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm hover:text-teal-500">
                quiz@gmail.com
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-phone text-white"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm hover:text-teal-500">
                + 00000-00000
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-white text-center mt-4 pb-4">
        @ copy | All rights reserved. | Quiz
      </p>
    </div>
  );
};
