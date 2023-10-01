import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute bg-cover z-0 w-auto h-auto"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Netflix"
      />
      <form className="absolute p-12 my-24 rounded-md bg-black bg-opacity-80 w-4/12  mx-auto right-0 left-0 text-neutral-500">
        <h1 className=" text-3xl my-4 font-bold  text-white">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="name"
            placeholder="Full name"
            className="p-3 my-2 w-full rounded-md bg-stone-700"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-3 my-2 w-full rounded-md bg-stone-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-md bg-stone-700"
        />
        <button className="py-4 my-6 bg-red-700 w-full rounded-md font-bold text-white">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <input
          className="w-6 bg-stone-700"
          type="checkbox"
          value="remember"
          checked
        />
        <span>Remember me</span>
        {/* <span className="text-right">Need help?</span> */}
        <div className=" text-sm pt-4 mt-6" onClick={handleSignUp}>
          {isSignUp ? (
            <span>
              Already Registered?{" "}
              <span className=" text-white">Sign in now.</span>
            </span>
          ) : (
            <span>
              New to Netflix? <span className=" text-white">Sign up now.</span>
            </span>
          )}
        </div>
        <div>
          <span className=" text-sm ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-600">Learn more</span>.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
