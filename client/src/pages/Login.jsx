import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5ebff] via-[#e8d8ff] to-[#d9c8ff] px-4">
       <img
        onClick={() => navigate("/")}
       src={assets.logo}
        alt="logo"
         className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
       />
  <div className="w-full max-w-md bg-[#111827]/90 text-white rounded-2xl p-8 shadow-xl backdrop-blur-lg border border-white/10">
    <h2 className="text-3xl font-bold text-center mb-2">
      {state === "Sign Up" ? "Create Account" : "Login"}
    </h2>
    <p className="text-center text-gray-400 mb-6">
      {state === "Sign Up"
        ? "Start your journey with us."
        : "Login to your account!"}
    </p>

    <form onSubmit={onSubmitHandler} className="space-y-4">
      {state === "Sign Up" && (
        <div className="flex items-center px-4 py-3 rounded-xl bg-gray-800 border border-gray-700">
          <img src={assets.person_icon} className="w-5 h-5 mr-3 opacity-80" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent w-full placeholder-gray-400 text-white outline-none"
            required
          />
        </div>
      )}

      <div className="flex items-center px-4 py-3 rounded-xl bg-gray-800 border border-gray-700">
        <img src={assets.mail_icon} className="w-5 h-5 mr-3 opacity-80" />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent w-full placeholder-gray-400 text-white outline-none"
          required
        />
      </div>

      <div className="flex items-center px-4 py-3 rounded-xl bg-gray-800 border border-gray-700">
        <img src={assets.lock_icon} className="w-5 h-5 mr-3 opacity-80" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent w-full placeholder-gray-400 text-white outline-none"
          required
        />
      </div>

      <div className="flex justify-end">
        <p
          onClick={() => navigate("/reset-password")}
          className="text-sm text-indigo-400 hover:text-white cursor-pointer"
        >
          Forgot password?
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all duration-300 font-semibold shadow-md"
      >
        {state}
      </button>
    </form>

    <p className="text-center text-gray-400 text-sm mt-6">
      {state === "Sign Up" ? (
        <>
          Already have an account?{" "}
          <span
            onClick={() => setState("Login")}
            className="text-indigo-300 underline cursor-pointer hover:text-white"
          >
            Login here
          </span>
        </>
      ) : (
        <>
          Don’t have an account?{" "}
          <span
            onClick={() => setState("Sign Up")}
            className="text-indigo-300 underline cursor-pointer hover:text-white"
          >
            Sign up
          </span>
        </>
      )}
    </p>
  </div>
</div>

  );
};

export default Login;
