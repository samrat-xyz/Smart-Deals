import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const { createUser,googleLogin } = useContext(AuthContext);
  // const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  // Sign Up User
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
    .then((result)=>{
      const user = result.user;
      alert("User Create Successfully")
      // navigate('/')
      
    }).catch((error)=>{
      console.log(error)
    })
  };

  // Sign up or login with google

  const handleLoginGoogle = () =>{
    googleLogin()
    .then((result)=>{
      console.log(result.user)
      // displayName,email
      const user = {
        name : result.user.displayName,
        email : result.user.email
      }
      fetch('http://localhost:3030/users',{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
      // navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Register Now!
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Login Now
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Image-URL
            </label>
            <input
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-Up */}
        <button
        onClick={handleLoginGoogle}
        className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
          <FcGoogle className="text-2xl mr-2" />
          <span className="text-gray-700 font-medium">Sign Up With Google</span>
        </button>
      </div>
    </div>
  );
}

export default Register;
