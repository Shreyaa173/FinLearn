import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const location = useLocation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const excludedRoutes = ["/signup", "/login", "/contact"];

  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">FinLearn</h3>
            <p className="text-gray-600 mb-2">
              Empowering communities through financial literacy. We make learning about
              money simple, engaging, and accessible to everyone. Join our mission to
              create a financially informed and secure future.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-600" />
                <a href="mailto:help@finlearn.com" className="text-gray-600 hover:text-gray-600">
                  help@finlearn.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-600" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-600">
                  (800) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-gray-600">
                  Financial District, Suite 200
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/courses" className="text-gray-600 hover:text-gray-600">
                  Courses
                </a>
              </li>
              <li>
                <a href="/tools" className="text-gray-600 hover:text-gray-600">
                  Financial Tools
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-600 hover:text-gray-600">
                  Resources
                </a>
              </li>
              <li>
                <a href="/community" className="text-gray-600 hover:text-gray-600">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get weekly financial tips and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white text-gray-600 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black  hover:bg-black text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-600">
          <p>© {currentYear} FinLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;