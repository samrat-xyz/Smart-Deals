import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const {googleLogin,loginUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const handleLoginGoogle = () =>{
    googleLogin().then((result)=>{
      // console.log(result.user)
      alert("Google Login Successfully")
      navigate(location.state ? location.state : "/")
    }).catch((error)=>{
      alert(error)
    })
  }

  const handleLogin = (e) =>{
    e.preventDefault()
    loginUser(email,password)
    .then((result)=>{
      console.log(result.user)
      alert("Login Successfully")
      navigate(location.state ? location.state : "/")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>
        <p className="text-center text-gray-500 mb-6">
          Don’t have an account?{" "}
          <Link to='/register' className="text-purple-600 font-medium hover:underline">
            Register Now
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button
        onClick={handleLoginGoogle}
        className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
          <FcGoogle className="text-2xl mr-2" />
          <span className="text-gray-700 font-medium">
            Sign In With Google
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;
