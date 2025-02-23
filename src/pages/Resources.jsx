import { PlayCircle, Search, Star } from 'lucide-react';
import React, { useState } from 'react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'सभी संसाधन / All Resources' },
    { id: 'basics', name: 'बैंकिंग मूल बातें / Banking Basics' },
    { id: 'savings', name: 'बचत / Savings' },
    { id: 'credit', name: 'क्रेडिट / Credit' },
    { id: 'investment', name: 'निवेश / Investment' }
  ];

  const resources = [
    {
      title: "Your First Bank Account",
      localTitle: "आपका पहला बैंक खाता",
      type: "basics",
      format: "Audio Guide",
      level: "Beginner",
      duration: "10 mins",
      language: ["Hindi", "English"],
      offline: true,
      description: "Learn how to open and use a basic savings account, with real examples from local banks."
    },
    {
      title: "Daily Savings Challenge",
      localTitle: "दैनिक बचत चुनौती",
      type: "savings",
      format: "Interactive Game",
      level: "Beginner",
      duration: "5 mins daily",
      language: ["Hindi", "English"],
      offline: true,
      description: "Start saving with just ₹10 per day. Track your progress and earn achievements."
    },
    {
      title: "Understanding KCC Cards",
      localTitle: "किसान क्रेडिट कार्ड को समझें",
      type: "credit",
      format: "Video Guide",
      level: "Beginner",
      duration: "15 mins",
      language: ["Hindi", "English"],
      offline: true,
      description: "Everything about Kisan Credit Cards and how they can help farmers."
    }
  ];

  const filteredResources = resources.filter(resource => 
    (selectedCategory === 'all' || resource.type === selectedCategory) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-600">Financial Learning / वित्तीय शिक्षा</h1>
          <p className="mt-2 text-gray-700">Free guides in your language / आपकी भाषा में मुफ्त गाइड</p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search / खोजें..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-600 rounded-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap border-2 ${
                  selectedCategory === category.id
                    ? 'border-gray-600 text-white bg-black'
                    : 'bg-white text-gray-600 border-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredResources.map((resource, index) => (
            <div key={index} className="border-2 border-gray-600 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {resource.format === 'Audio Guide' && <PlayCircle className="w-5 h-5" />}
                    {resource.format === 'Interactive Game' && <Star className="w-5 h-5" />}
                    {resource.format === 'Video Guide' && <PlayCircle className="w-5 h-5" />}
                    <span className="text-sm">{resource.format}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{resource.localTitle}</h3>
                  <h4 className="text-md">{resource.title}</h4>
                  <p className="mt-1 text-gray-700 text-sm">{resource.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="border-2 border-gray-600 px-3 py-1 rounded-lg text-sm">
                      {resource.level}
                    </span>
                    <span className="border-2 border-gray-600 px-3 py-1 rounded-lg text-sm">
                      {resource.duration}
                    </span>
                    {resource.offline && (
                      <span className="border-2 border-gray-600 px-3 py-1 rounded-lg text-sm">
                        Works Offline / ऑफ़लाइन काम करता है
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {resource.language.map((lang, i) => (
                      <span key={i} className="text-sm text-gray-700">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition text-sm">
                  Start Learning / सीखना शुरू करें
                </button>
                {resource.offline && (
                  <button className="px-4 py-3 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-100 transition text-sm">
                    Download / डाउनलोड
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-700">No resources found / कोई संसाधन नहीं मिला</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;