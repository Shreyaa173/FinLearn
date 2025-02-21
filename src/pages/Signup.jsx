import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Check, X, UserPlus, AlertCircle } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [focused, setFocused] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    return strength;
  };

  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(formData.password));
  }, [formData.password]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      console.log("Account created:", formData);
    } catch (error) {
      setStatus("error");
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return "bg-red-500";
      case 1: return "bg-orange-500";
      case 2: return "bg-yellow-500";
      case 3: return "bg-blue-500";
      case 4: return "bg-green-500";
      default: return "bg-gray-200";
    }
  };

  const renderPasswordStrength = () => {
    return (
      <div className="mt-2">
        <div className="flex gap-2 mb-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index < passwordStrength ? getPasswordStrengthColor() : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500">
          {passwordStrength === 0 && "Very Weak"}
          {passwordStrength === 1 && "Weak"}
          {passwordStrength === 2 && "Fair"}
          {passwordStrength === 3 && "Good"}
          {passwordStrength === 4 && "Strong"}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-500 ease-out hover:shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
          Create Account
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="name"
              className={`block text-sm font-medium transition-all duration-200 ${
                focused === "name" ? "text-black" : "text-gray-600"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              className={`mt-1 w-full px-4 py-2 border rounded-md transition-all duration-200
                ${focused === "name" ? "border-black ring-1 ring-black" : "border-gray-300"}
                transform hover:scale-[1.01]`}
              required
            />
          </div>

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
            <label
              htmlFor="password"
              className={`block text-sm font-medium transition-all duration-200 ${
                focused === "password" ? "text-black" : "text-gray-600"
              }`}
            >
              Password
            </label>
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
            {renderPasswordStrength()}
          </div>

          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className={`block text-sm font-medium transition-all duration-200 ${
                focused === "confirmPassword" ? "text-black" : "text-gray-600"
              }`}
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setFocused("confirmPassword")}
                onBlur={() => setFocused("")}
                className={`mt-1 w-full px-4 py-2 border rounded-md transition-all duration-200
                  ${focused === "confirmPassword" ? "border-black ring-1 ring-black" : "border-gray-300"}
                  transform hover:scale-[1.01]`}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {formData.confirmPassword && (
              <div className={`mt-1 text-sm flex items-center gap-1
                ${formData.password === formData.confirmPassword ? "text-green-500" : "text-red-500"}
              `}>
                {formData.password === formData.confirmPassword ? (
                  <>
                    <Check className="w-4 h-4" />
                    Passwords match
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4" />
                    Passwords don't match
                  </>
                )}
              </div>
            )}
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
                  Create Account
                  <UserPlus className="w-4 h-4" />
                </>
              )}
              {status === "loading" && "Creating Account..."}
              {status === "success" && (
                <>
                  Account Created
                  <Check className="w-4 h-4 animate-bounce" />
                </>
              )}
              {status === "error" && (
                <>
                  Error Creating Account
                  <AlertCircle className="w-4 h-4" />
                </>
              )}
            </span>
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link 
            to="/login" 
            className="text-black font-medium hover:underline transition-all duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;