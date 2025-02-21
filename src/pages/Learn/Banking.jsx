import React from 'react';
import { ChevronRight, PiggyBank, CreditCard, Calculator, Book } from 'lucide-react';

// Custom Card Component to replace shadcn/ui Card
const CustomCard = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 ${className}`}>
      <div className="p-5 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

const Banking= () => {
  const topics = [
    {
      title: "Understanding Bank Accounts",
      description: "Learn about checking, savings, and other account types",
    },
    {
      title: "Banking Services",
      description: "Discover our range of banking services and features",
    },
    {
      title: "Security & Protection",
      description: "Learn about account security and fraud prevention",
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <Book className="h-8 w-8 text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Banking Basics</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <CustomCard 
            key={index} 
            title={
              <div className="flex justify-between items-center">
                {topic.title}
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </div>
            }
          >
            <p className="text-gray-600">{topic.description}</p>
          </CustomCard>
        ))}
      </div>
    </div>
  );
};

export default Banking;
