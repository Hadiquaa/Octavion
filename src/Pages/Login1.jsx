import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import placeholder from "../Assets/placeholder.png";
import logo from "../Assets/output-onlinepngtools.png"

const Login = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/app/dashboard");
    }, 1500);
  };

  return (
    <div className="h-screen w-screen flex text-white overflow-hidden">
      {/* Left Blue Section */}
      <motion.div
        className="bg-primary flex justify-center items-center flex-col gap-8"
        initial={{ width: "60%" }}
        animate={{ width: isAnimating ? "20%" : "60%" }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={placeholder}
          alt="Placeholder"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? -50 : 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="text-white flex flex-col gap-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold text-2xl typing-animation">
            OCTAVION{" "}
            <span className="font-medium">
              : The Octagon of fuel management
            </span>
          </h1>
          <div className="text-[16px] font-medium">
            Keeping your fuel inventory in tune
          </div>
        </motion.div>
      </motion.div>

      {/* Right White Section with Wave Transition */}
      <motion.div
        className="relative flex justify-center items-center bg-white"
        initial={{ width: "40%" }}
        animate={{ width: isAnimating ? "80%" : "40%" }}
        transition={{ duration: 1 }}
        style={{
          clipPath: isAnimating
            ? "path('M0 100 Q50 0 100 100 T200 100 V100 H0 Z')" 
            : "none",
        }}
      >
        <div className="absolute top-8 right-4 text-4xl font-bold text-accent-blue">
          <img src={logo} width="200px" height="100px"/>
        </div>
        <div className="text-left">
          <h1 className="font-bold text-4xl text-accent-blue">Log in</h1>
          <p className="text-xl mt-1 mb-5 text-text-gray">
            Enter your login details
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-2xl text-text-gray">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Your Username"
                required
                className="w-[350px] bg-soft-gray border-none outline-none rounded-3xl h-[48px] px-4 text-[18px] focus:ring-2 focus:ring-accent-blue shadow-sm text-text-gray"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-2xl text-text-gray">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-[350px] bg-soft-gray border-none outline-none rounded-3xl h-[48px] px-4 text-[18px] focus:ring-2 focus:ring-accent-blue shadow-sm text-text-gray"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent-blue text-white h-14 rounded-3xl mt-4 text-2xl font-semibold"
            >
              Log in
            </button>
            <a href="/" className="text-[18px] text-text-gray">
              Forgot Password?
            </a>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
