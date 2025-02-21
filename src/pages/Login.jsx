import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn, Check, AlertCircle } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [focused, setFocused] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      console.log("Logged in with", formData);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-500 ease-out hover:shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
          Welcome Back
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="email"
              className={`block text-sm font-medium transition-all duration-200 ${
                focused === "email" ? "text-black" : "text-gray-600"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              className={`mt-1 w-full px-4 py-2 border rounded-md transition-all duration-200
                ${focused === "email" ? "border-black ring-1 ring-black" : "border-gray-300"}
                transform hover:scale-[1.01]`}
              required
            />
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="password"
                className={`block text-sm font-medium transition-all duration-200 ${
                  focused === "password" ? "text-black" : "text-gray-600"
                }`}
              >
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                className={`mt-1 w-full px-4 py-2 border rounded-md transition-all duration-200
                  ${focused === "password" ? "border-black ring-1 ring-black" : "border-gray-300"}
                  transform hover:scale-[1.01]`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full relative py-3 px-6 rounded-full font-medium text-white
              transform transition-all duration-200
              ${status === "loading" || status === "success"
                ? "bg-black cursor-not-allowed"
                : "bg-black hover:scale-[1.02] hover:shadow-lg active:scale-95"
              }`}
          >
            <span className={`flex items-center justify-center gap-2 
              ${status === "loading" ? "animate-pulse" : ""}`}>
              {status === "idle" && (
                <>
                  Login
                  <LogIn className="w-4 h-4" />
                </>
              )}
              {status === "loading" && "Logging in..."}
              {status === "success" && (
                <>
                  Logged In
                  <Check className="w-4 h-4 animate-bounce" />
                </>
              )}
              {status === "error" && (
                <>
                  Login Failed
                  <AlertCircle className="w-4 h-4" />
                </>
              )}
            </span>
          </button>
        </form>

        <div className="mt-6 space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              GitHub
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link 
            to="/signup" 
            className="text-black font-medium hover:underline transition-all duration-200"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;