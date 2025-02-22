import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"; // Import Navbar component
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "../src/pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import logo from "../src/assets/Logo.png";
import Footer from "./components/Footer";
import Discussion from "../src/pages/Community/Discussion";
import Find from "../src/pages/Community/Find";
import Success from "../src/pages/Community/Success";
import Banking from "../src/pages/Learn/Banking";
import Financial from "../src/pages/Learn/Financial";
import Savings from "../src/pages/Learn/Savings";
import Credit from "../src/pages/Learn/Credit";
import Budget from "../src/pages/Tools/Budget";
import Loans from "../src/pages/Tools/Loans";
import Savings_Tools from "../src/pages/Tools/Savings";
import Resources from "../src/pages/Resources";
import { useTranslation } from 'react-i18next';

const App = () => {
  // Navigation items configuration (for passing to Navbar)
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    {
      label: "Learn",
      subItems: [
        { label: "Banking Basics", href: "/courses/banking" },
        { label: "Savings & Investment", href: "/courses/savings" },
        { label: "Credit Management", href: "/courses/credit" },
        { label: "Financial Planning", href: "/courses/planning" },
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
    <Suspense fallback="loading">
    <Router>
      {/* Navbar is placed here, so it will always be visible */}
      <Navbar
        logo={<img src={logo} 
        className="w-10" 
        alt="ConnectU Logo" />}
        navItems={navItems}
        loginText="Login"
        className="sticky top-0"
      />

      {/* Main content, rendered based on the route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />

        

        {/* Sub-routes for "Learn" */}
        <Route path="/community/forum" element={<Discussion />} />
        <Route path="/community/mentors" element={<Find />} />
        <Route path="/community/stories" element={<Success/>} />

        {/* Sub-routes for "Alumni Stories" */}
        <Route path="/courses/banking" element={<Banking />} />
        <Route path="/courses/credit" element={<Credit />} />
        <Route path="/courses/planning" element={<Financial />} />
        <Route path="/courses/savings" element={<Savings />} />

        {/* Sub-routes for "Tools" */}
        <Route path="/tools/budget" element={<Budget />} />
        <Route path="/tools/loan" element={<Loans />} />
        <Route path="/tools/savings" element={<Savings_Tools />} />
      </Routes>
      <Footer />
    </Router>
    </Suspense>

  );
};

export default App;
