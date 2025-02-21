import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"; // Import Navbar component
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import BrowseJobs from "../src/pages/jobs/BrowseJobs";
import PostJob from "../src/pages/jobs/PostJobs";
import SavedJobs from "../src/pages/jobs/SavedJobs";
import SuccessStories from "../src/pages/stories/SuccessStories";
import Interviews from "../src/pages/stories/Interviews";
import ShareStory from "../src/pages/stories/ShareStory";
import Contact from "../src/pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import logo from "../src/assets/ConnectULogo.png";
import Footer from "./components/Footer";

const App = () => {
  // Navigation items configuration (for passing to Navbar)
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    {
      label: "Learn",
      href: "/courses",
      subItems: [
        { label: "Banking Basics", href: "/courses/banking" },
        { label: "Savings & Investment", href: "/courses/savings" },
        { label: "Credit Management", href: "/courses/credit" },
        { label: "Financial Planning", href: "/courses/planning" },
      ],
    },
    {
      label: "Tools",
      href: "/tools",
      subItems: [
        { label: "Budget Calculator", href: "/tools/budget" },
        { label: "Loan Calculator", href: "/tools/loan" },
        { label: "Savings Planner", href: "/tools/savings" },
      ],
    },
    {
      label: "Community",
      href: "/community",
      subItems: [
        { label: "Discussion Forum", href: "/community/forum" },
        { label: "Success Stories", href: "/community/stories" },
        { label: "Find Mentor", href: "/community/mentors" },
      ],
    },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <Router>
      {/* Navbar is placed here, so it will always be visible */}
      <Navbar
        logo={<img src={logo} 
        className="w-48" 
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

        

        {/* Sub-routes for "Job Board" */}
        <Route path="/jobs/browse" element={<BrowseJobs />} />
        <Route path="/jobs/post" element={<PostJob />} />
        <Route path="/jobs/saved" element={<SavedJobs />} />

        {/* Sub-routes for "Alumni Stories" */}
        <Route path="/stories/success" element={<SuccessStories />} />
        <Route path="/stories/interviews" element={<Interviews />} />
        <Route path="/stories/share" element={<ShareStory />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
