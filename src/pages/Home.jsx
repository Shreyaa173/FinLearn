import { ArrowRight, BookOpen, Briefcase, Star, Users } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span>
      {displayText}
      {isTyping && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const AnimatedCounter = ({ end, start = 0, duration = 2000, inView }) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    if (!inView) return;
    
    // Convert string numbers like "5000+" to numbers
    const finalNumber = parseInt(end.replace(/[^0-9]/g, ''));
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
        isInView 
          ? "translate-y-0 opacity-100" 
          : "translate-y-10 opacity-0"
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
          <AnimatedCounter 
            end={count} 
            start={0} 
            inView={isInView} 
          />
        </h3>
        <p className="text-gray-600 mt-2">{label}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const stats = [
    { icon: Users, count: "50000", label: "Active Learners" },
    { icon: BookOpen, count: "100", label: "Financial Courses" },
    { icon: Star, count: "1000", label: "Success Stories" },
    { icon: Briefcase, count: "500", label: "Financial Mentors" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="home-bg rounded-3xl mx-4 my-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block bg-white rounded-full px-6 py-2 mb-6 text-gray-700 shadow-sm transform hover:scale-105 transition-transform duration-200">
              Financial Education for Everyone
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent h-[calc(1.5em)]">
              <TypewriterText text="Learn. Save. Grow." speed={100} />
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Simple financial education for a better tomorrow
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-black transition-all duration-200 hover:scale-105">
                Start Learning <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-200 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 hover:scale-105">
                View Courses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                {...stat} 
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;