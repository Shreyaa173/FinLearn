import React, { useState } from 'react';
import { Book, PlayCircle, Download, Star, Search, Filter, Bookmark } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'basics', name: 'Banking Basics' },
    { id: 'savings', name: 'Savings' },
    { id: 'credit', name: 'Credit' },
    { id: 'investment', name: 'Investment' }
  ];

  const resources = [
    {
      title: "Understanding Bank Accounts",
      type: "basics",
      format: "Interactive Guide",
      level: "Beginner",
      duration: "15 mins",
      language: ["English", "Spanish"],
      offline: true,
      description: "Learn about different types of bank accounts and how to choose the right one for you."
    },
    {
      title: "Smart Saving Strategies",
      type: "savings",
      format: "Video Tutorial",
      level: "Beginner",
      duration: "10 mins",
      language: ["English", "Spanish"],
      offline: true,
      description: "Simple techniques to build your savings, even with a limited income."
    },
    {
      title: "Credit Score Basics",
      type: "credit",
      format: "Interactive Module",
      level: "Intermediate",
      duration: "20 mins",
      language: ["English"],
      offline: false,
      description: "Understanding credit scores and how to improve them."
    },
    {
      title: "Investment Fundamentals",
      type: "investment",
      format: "PDF Guide",
      level: "Beginner",
      duration: "25 mins",
      language: ["English", "Spanish"],
      offline: true,
      description: "Basic concepts of investing and growing your wealth safely."
    }
  ];

  const filteredResources = resources.filter(resource => 
    (selectedCategory === 'all' || resource.type === selectedCategory) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-600';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-600';
      case 'Advanced': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getFormatIcon = (format) => {
    switch(format) {
      case 'Interactive Guide': return <Book className="w-5 h-5" />;
      case 'Video Tutorial': return <PlayCircle className="w-5 h-5" />;
      case 'PDF Guide': return <Download className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Learning Resources</h1>
          <p className="mt-2 text-gray-600">Free financial education materials for everyone</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 border hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="space-y-4">
          {filteredResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getFormatIcon(resource.format)}
                    <span className="text-sm text-gray-500">{resource.format}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800">{resource.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{resource.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${getLevelColor(resource.level)}`}>
                      {resource.level}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {resource.duration}
                    </span>
                    {resource.offline && (
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        Available Offline
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {resource.language.map((lang, i) => (
                      <span key={i} className="text-sm text-gray-500">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm">
                  Start Learning
                </button>
                {resource.offline && (
                  <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition text-sm">
                    Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No resources found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;