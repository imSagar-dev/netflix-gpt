import React, { useState } from "react";
import Header from "../core/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <div class="relative flex h-screen items-center justify-center ">
          <img
            className="absolute"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
            alt="BACKGROUND"
          />

          <div className="absolute  z-30 text-center justify-center w-3/12   rounded-md bg-[#000000B3]">
            <form className="flex  flex-col p-10 mb-5">
              <h4 className="font-bold text-2xl text-center mt-4 pl-4 text-white">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h4>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="mt-6 p-5 rounded-md bg-[#000000B3] border border-gray-400 select-none text-white"
                />
              )}
              <input
                type="text"
                placeholder="Enter Email"
                className="mt-6 p-5 rounded-md bg-[#000000B3] border border-gray-400 select-none text-white"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="mt-4 rounded-md p-5 bg-[#000000B3] border border-gray-400 select-none text-white"
              />
              <button className="mt-6 p-2  text-center bg-red-500 text-white rounded-md ">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              {isSignInForm ? (
                <p className="text-white mt-6">
                  New to Netflix?
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {
                      toggleSignInForm();
                    }}
                  >
                    Sign up now.
                  </span>
                </p>
              ) : (
                <p className="text-white mt-6">
                  Already Registered?
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {
                      toggleSignInForm();
                    }}
                  >
                    Sign in now.
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
