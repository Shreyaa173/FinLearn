import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Target,
  Users,
  ChevronDown,
  Calculator,
} from "lucide-react";
import backgroundImage from "../assets/about-bg.jpg";
import backgroundImage1 from "../assets/about.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & Financial Education Expert",
      quote: "Making financial literacy accessible to everyone",
      experience: "15 years in Rural Banking",
    },
    {
      name: "Raj Patel",
      role: "Head of Community Development",
      quote: "Building financial confidence in communities",
      experience: "10 years in Microfinance",
    },
    {
      name: "Maria Rodriguez",
      role: "Education Content Director",
      quote: "Simplifying complex financial concepts",
      experience: "12 years in Financial Training",
    },
  ];

  const features = [
    {
      title: "Interactive Learning",
      description:
        "Learn through engaging modules, real-life scenarios, and practical exercises",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Financial Tools",
      description: "Access simple calculators for budgeting, savings, and loans",
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      title: "Community Support",
      description: "Connect with mentors and peers on your financial journey",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
        <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Calculator className="w-16 h-16 text-black" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent transition-transform duration-500 hover:scale-105">
            Welcome to FinLearn
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering communities through accessible financial education. Join us in building a financially literate future.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("mission");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 mx-auto bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Discover More
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              {/* Mission Statement */}
              <div className="space-y-6 group">
                <p className="text-gray-600 leading-relaxed text-lg transform transition-all duration-500 ease-out group-hover:scale-105">
                  At FinLearn, we believe that financial education should be accessible to everyone. 
                  Our platform breaks down complex financial concepts into simple, understandable lessons 
                  that empower individuals to make informed financial decisions.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Through interactive learning, practical tools, and community support, 
                  we're building a foundation for financial literacy in rural and low-income communities.
                </p>
              </div>

              {/* Key Principles Card */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Key Principles
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-2.5 bg-black rounded-full transform transition-all duration-300 group-hover:scale-150" />
                    <p className="text-gray-600">
                      <strong className="text-black">Accessibility:</strong>{" "}
                      Simple language and mobile-first learning
                    </p>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-2.5 bg-black rounded-full transform transition-all duration-300 group-hover:scale-150" />
                    <p className="text-gray-600">
                      <strong className="text-black">
                        Practical Learning:
                      </strong>{" "}
                      Real-world scenarios and hands-on tools
                    </p>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-2.5 bg-black rounded-full transform transition-all duration-300 group-hover:scale-150" />
                    <p className="text-gray-600">
                      <strong className="text-black">
                        Community Support:
                      </strong>{" "}
                      Peer learning and expert guidance
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              {/* What We Offer Card */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transform hover:scale-102 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-8 text-black">
                  What We Offer
                </h3>
                <ul className="space-y-8">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="text-black transform transition-all duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-black mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started Card */}
          <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 p-8 mt-6 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-black">
              Start Your Financial Journey
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  1
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Create Your Profile
                  </p>
                  <p className="text-gray-600">
                    Set up your account and tell us about your financial goals. We'll customize 
                    your learning path based on your needs and experience level.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  2
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Start Learning
                  </p>
                  <p className="text-gray-600">
                    Begin with basic modules on banking, savings, and budgeting. Progress at 
                    your own pace through interactive lessons and practical exercises.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  3
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Use Financial Tools
                  </p>
                  <p className="text-gray-600">
                    Practice what you learn with our simple calculators and planning tools. 
                    Create budgets, calculate loans, and track your savings goals.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  4
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Join the Community
                  </p>
                  <p className="text-gray-600">
                    Connect with other learners, share experiences, and get guidance from 
                    financial mentors. Learn from success stories and participate in discussions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community and take the first step towards financial literacy
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/login">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;