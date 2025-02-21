import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      // Reset form after 2 seconds of showing success
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
    }
  };

  const isFormEmpty = !formData.name && !formData.email && !formData.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg transform transition-all duration-500 ease-out hover:shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
                ${focused === "name" 
                  ? "border-black ring-1 ring-black" 
                  : "border-gray-300"
                }
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
                ${focused === "email" 
                  ? "border-black ring-1 ring-black" 
                  : "border-gray-300"
                }
                transform hover:scale-[1.01]`}
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className={`block text-sm font-medium transition-all duration-200 ${
                focused === "message" ? "text-black" : "text-gray-600"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              className={`mt-1 w-full px-4 py-2 border rounded-md transition-all duration-200 h-32 resize-none
                ${focused === "message" 
                  ? "border-black ring-1 ring-black" 
                  : "border-gray-300"
                }
                transform hover:scale-[1.01]`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full relative py-3 px-6 rounded-full font-medium text-white
              transform transition-all duration-200
              ${status === "loading" || status === "success"
                ? "bg-black cursor-not-allowed"
                : "bg-black hover:scale-[1.02] hover:shadow-lg active:scale-95"
              }
              ${isFormEmpty ? "opacity-50" : "opacity-100"}
            `}
          >
            <span className={`flex items-center justify-center gap-2 
              ${status === "loading" ? "animate-pulse" : ""}`}>
              {status === "idle" && (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
              {status === "loading" && "Sending..."}
              {status === "success" && (
                <>
                  Sent Successfully
                  <CheckCircle className="w-4 h-4 animate-bounce" />
                </>
              )}
              {status === "error" && (
                <>
                  Error Sending
                  <AlertCircle className="w-4 h-4" />
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;