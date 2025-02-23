import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Star,
  Users,
  Phone,
  Globe,
  Award,
  IndianRupee,
  PiggyBank,
  Calculator,
  Percent,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
const BilingualTypewriterText = ({
  englishText,
  hindiText,
  speed = 100,
  transitionDelay = 1000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (isEnglish && currentIndex < englishText.length) {
      // Typing English text
      const timeout = setTimeout(() => {
        setDisplayText(englishText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isEnglish && currentIndex >= englishText.length) {
      // Transition from English to Hindi
      const timeout = setTimeout(() => {
        setIsEnglish(false);
        setCurrentIndex(0);
        setDisplayText("");
      }, transitionDelay);
      return () => clearTimeout(timeout);
    } else if (!isEnglish && currentIndex < hindiText.length) {
      // Typing Hindi text
      const timeout = setTimeout(() => {
        setDisplayText(hindiText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [
    currentIndex,
    englishText,
    hindiText,
    speed,
    isEnglish,
    isTyping,
    transitionDelay,
  ]);

  return (
    <span className={isEnglish ? "font-sans" : "font-sans"}>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

const AnimatedCounter = ({ end, start = 0, duration = 2000, inView }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!inView) return;

    // Convert string numbers like "5000+" to numbers
    const finalNumber = parseInt(end.replace(/[^0-9]/g, ""));
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(start + (finalNumber - start) * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(finalNumber);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView, start]);

  return <>{count.toLocaleString()}+</>;
};

const FinancialTip = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
    <div className="rounded-full bg-black/5 p-3">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, count, label, delay }) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`text-center transform transition-all duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white p-8 py-12 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
        <div className="relative">
          {/* <Icon className="w-8 h-8 mx-auto mb-4 text-gray-700" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full" /> */}
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
          <AnimatedCounter end={count} start={0} inView={isInView} />
        </h3>
        <p className="text-gray-600 mt-2">{label}</p>
      </div>
    </div>
  );
};

const Badge = ({ children, className = "", variant = "default" }) => {
  const baseStyles = "inline-block px-3 py-1 rounded-full text-sm font-medium";
  const variants = {
    default: "bg-black text-white",
    outline: "border border-current",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md">
    <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LearningModule = ({ title, duration, level, image }) => (
  <div className="group cursor-pointer">
    <div className="relative rounded-xl overflow-hidden mb-3">
      <img
        src={logo}
        alt={title}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
        {duration}
      </span>
    </div>
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{level}</p>
  </div>
);

const Home = () => {
  const financialTips = [
    {
      icon: PiggyBank,
      title: "Start Small, Save Big",
      description:
        "Begin with saving just ₹100 per week. Small consistent savings lead to significant growth over time.",
    },
    {
      icon: Calculator,
      title: "Track Your Expenses",
      description:
        "Write down everything you spend for a month to understand your spending patterns.",
    },
    {
      icon: IndianRupee,
      title: "Emergency Fund",
      description:
        "Aim to save 3-6 months of expenses for unexpected situations.",
    },
    {
      icon: Percent,
      title: "Follow 50/30/20 Rule",
      description:
        "Spend 50% on needs, 30% on wants, and save 20% of your income.",
    },
  ];

  const stats = [
    { icon: Users, count: "50000", label: "Active Learners" },
    { icon: BookOpen, count: "100", label: "Financial Courses" },
    { icon: Star, count: "1000", label: "Success Stories" },
    { icon: Briefcase, count: "500", label: "Financial Mentors" },
  ];

  const features = [
    {
      icon: Phone,
      title: "Offline Learning",
      description:
        "Download lessons to learn without internet. Perfect for areas with limited connectivity.",
    },
    {
      icon: Globe,
      title: "Multiple Languages",
      description:
        "Content available in regional languages to ensure better understanding.",
    },
    {
      icon: Award,
      title: "Earn Certificates",
      description:
        "Get recognized for your progress with downloadable certificates.",
    },
  ];

  const popularModules = [
    {
      title: "Basic Banking Guide",
      duration: "30 mins",
      level: "Beginner",
      description:
        "Learn the fundamentals of banking, including savings accounts, deposits, and withdrawals.",
      progress: 0,
    },
    {
      title: "Smart Savings Habits",
      duration: "45 mins",
      level: "Beginner",
      description:
        "Develop effective saving strategies and learn to build your emergency fund.",
      progress: 35,
    },
    {
      title: "Understanding Credit",
      duration: "40 mins",
      level: "Intermediate",
      description:
        "Master the basics of credit, credit scores, and responsible borrowing.",
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="home-bg rounded-3xl mx-4 my-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block bg-white rounded-full px-6 py-2 mb-6 text-gray-700 shadow-sm transform hover:scale-105 transition-transform duration-200">
              Financial Education for Everyone
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-3">
              <BilingualTypewriterText
                englishText="Learn. Save. Grow."
                hindiText="सीखें। बचाएं। बढ़ें।"
                speed={100}
                transitionDelay={1000}
              />
            </h2>

            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Simple financial education for a better tomorrow
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-black/90 transition-all duration-200 hover:scale-105">
                Start Learning <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-800 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 hover:scale-105">
                View Courses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 200} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning Made Simple
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to make financial education accessible to
              everyone, regardless of their background or location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Modules Section
      <section className="py-16 px-4 md:px-8 bg-white ">
      <div className="max-w-6xl mx-auto border-gray-600">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <Badge className="mb-2">Start Learning</Badge>
            <h2 className="text-3xl font-bold">Popular Modules</h2>
          </div>
          <button className="group text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 text-gray-600 hover:text-black">
            View All Modules 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularModules.map((module) => (
            <LearningModule key={module.title} {...module} />
          ))}
        </div>
      </div>
    </section> */}

      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Financial Tools</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn By Doing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practice financial planning with our simple calculator and learn
              from practical tips
            </p>
          </div>

          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    Smart Money Tips
                  </h3>
                  <div className="space-y-4">
                    {financialTips.map((tip) => (
                      <FinancialTip key={tip.title} {...tip} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/tools/budget">
              <button className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-black/90 transition-all duration-200 hover:scale-105">
                Explore More Tools <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
