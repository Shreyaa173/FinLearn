import { Award, Book, Calculator, Search, Star, Users } from 'lucide-react';
import React from 'react';
import priya from "../../assets/priya.png";
import raj from "../../assets/raj.png";
// Search Bar Component
const SearchBar = () => (
  <div className="relative">
    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
    <input
      type="text"
      placeholder="Find a mentor by topic (e.g., Savings, Banking)"
      className="w-full pl-10 p-3 border-2 border-gray-200 rounded-lg font-medium"
    />
  </div>
);

// Topic Filter Component
const TopicFilter = () => {
  const topics = [
    { icon: Book, name: "Banking", nameHindi: "बैंकिंग" },
    { icon: Calculator, name: "Savings", nameHindi: "बचत" },
    { icon: Award, name: "Credit", nameHindi: "क्रेडिट" }
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {topics.map((topic, index) => (
        <button
          key={index}
          className="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg bg-white min-w-[100px] hover:bg-gray-50"
        >
          <topic.icon className="h-6 w-6 mb-1" />
          <span className="text-sm font-bold">{topic.name}</span>
          <span className="text-xs">{topic.nameHindi}</span>
        </button>
      ))}
    </div>
  );
};

// Mentor Card Component
const MentorCard = ({ mentor }) => (
  <div className="border-2 border-gray-200 rounded-lg bg-white">
    <div className="p-4 border-b-2 border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-16 h-16 rounded-full border-2 border-gray-200"
        />
        <div>
          <h3 className="font-bold text-lg">{mentor.name}</h3>
          <p className="text-sm text-gray-600">रूरल बैंकिंग विशेषज्ञ</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="h-4 w-4" fill="black" />
            <span className="font-medium">{mentor.rating}</span>
            <span className="text-sm text-gray-600">({mentor.reviewCount} reviews)</span>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4">
      <div className="mb-4">
        <h4 className="font-bold mb-2">Expertise • विशेषज्ञता</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-bold">Languages • भाषाएं</h4>
        <div className="flex gap-2">
          {mentor.languages.map((lang, i) => (
            <span key={i} className="text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <button className="w-full p-3 bg-black text-white rounded-lg font-bold hover:bg-black">
          <span className="block">Schedule Free Call</span>
          <span className="block text-sm">मुफ्त कॉल शेड्यूल करें</span>
        </button>
        <button className="w-full p-3 border-2 border-gray-200 rounded-lg font-bold hover:bg-gray-50">
          <span className="block">View Profile</span>
          <span className="block text-sm">प्रोफ़ाइल देखें</span>
        </button>
      </div>
    </div>
  </div>
);

const Find = () => {
  const mentors = [
    {
      name: "Priya Sharma",
      role: "Rural Banking Expert",
      expertise: ["Basic Banking", "Savings", "Government Schemes"],
      languages: ["Hindi", "English", "Marathi"],
      experience: "8 years",
      rating: 4.9,
      reviewCount: 128,
      availability: "Available for 2 mentees",
      image: priya
    },
    {
      name: "Raj Singh",
      role: "Financial Advisor",
      expertise: ["Family Savings", "Rural Credit", "Insurance"],
      languages: ["Hindi", "English", "Punjabi"],
      experience: "12 years",
      rating: 4.8,
      reviewCount: 156,
      availability: "Available for 1 mentee",
      image: raj
    }
  ];

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {/* Header */}
      <div className="flex items-center mb-6 border-b-2 border-gray-200 pb-4">
        <Users className="h-8 w-8 text-gray-600 mr-3" strokeWidth={2.5} />
        <div>
          <h1 className="text-2xl font-bold">Find a Financial Guide</h1>
          <h2 className="text-xl">वित्तीय मार्गदर्शक खोजें</h2>
        </div>
      </div>

      {/* Search Section */}
      <div className="space-y-4 mb-6">
        <SearchBar />
        <TopicFilter />
      </div>

      {/* Mentor Cards */}
      <div className="space-y-4">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Find;