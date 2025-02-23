import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`hover:text-gray-600 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${className}`}
  >
    {children}
  </Link>
);

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const Navbar = ({ logo, navItems = defaultNavItems, onLogin, loginText = "Login", className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const defaultNavItems = [
    {
      label: "Learn",
      subItems: [
        { label: "Banking Basics", href: "/learn/banking" },
        { label: "Savings & Investment", href: "/learn/savings" },
        { label: "Credit Management", href: "/learn/credit" },
        { label: "Financial Planning", href: "/learn/planning" },
      ],
    },
    {
      label: "Tools",
      subItems: [
        { label: "Budget Calculator", href: "/tools/budget" },
        { label: "Loan Calculator", href: "/tools/loan" },
        { label: "Savings Planner", href: "/tools/savings" },
      ],
    },
    {
      label: "Community",
      subItems: [
        { label: "Discussion Forum", href: "/community/forum" },
        { label: "Success Stories", href: "/community/stories" },
        { label: "Find Mentor", href: "/community/mentors" },
      ],
    },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header className={`bg-white shadow-sm ${className} fixed w-full z-50`}>
      <nav className="bg-white max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center w-1/4">
            {typeof logo === "string" ? (
              <img className="h-8 w-auto" src={logo} alt="FinLearn Logo" />
            ) : (
              logo
            )} <p className="font-semibold mx-2 text-l">Finlearn</p>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center w-2/4">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <NavLink to={item.href} className="inline-flex items-center">
                    {item.label}
                    {item.subItems && (
                      <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </NavLink>
                  {item.subItems && <DropdownMenu items={item.subItems} />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end w-1/4">
            <Link
              to="/login"
              className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-black transition-colors duration-200"
            >
              {loginText}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } py-2 space-y-1`}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.href}
                className="block py-2 text-base font-medium"
              >
                {item.label}
              </NavLink>
              {item.subItems && (
                <div className="pl-4 space-y-1">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.href}
                      to={subItem.href}
                      className="block py-2 text-sm"
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/login"
            className="block w-full bg-black text-white px-6 py-2 rounded-full hover:bg-black transition-colors duration-200 mt-4 text-center"
          >
            {loginText}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;