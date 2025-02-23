// Custom Card Component to replace shadcn/ui Card
import { Calculator } from 'lucide-react';
import React from 'react';

// Bilingual Card Component
const EducationCard = ({ title, titleHindi, children, className = '' }) => {
  return (
    <div className={`border-2 border-gray-200 rounded-lg bg-white mb-4 ${className}`}>
      <div className="p-4 border-b-2 border-gray-200">
        <h3 className="text-l font-bold text-gray-600">{title}</h3>
        <h4 className="text-md font-medium text-gray-700 mt-1">{titleHindi}</h4>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

// Bilingual Learn More Button
const LearnMoreButton = () => (
  <button 
    className="w-full mt-4 p-3 bg-black text-white rounded font-bold hover:bg-black border-2 border-gray-200"
  >
    <span >Start Learning →</span>
    <span className="block text-xs">शुरू करें →</span>
  </button>
);

// Banking Module
export const Banking = () => {
  const lessons = [
    {
      title: "What is a Bank?",
      titleHindi: "बैंक क्या है?",
      description: "Learn the basics of banks and how they help keep your money safe",
      descriptionHindi: "बैंक की मूल बातें और यह कैसे आपके पैसे को सुरक्षित रखने में मदद करता है"
    },
    {
      title: "Opening Your First Account",
      titleHindi: "अपना पहला खाता खोलें",
      description: "Simple steps to open a bank account - what you need and how to do it",
      descriptionHindi: "बैंक खाता खोलने के सरल चरण - आपको क्या चाहिए और कैसे करें"
    },
    {
      title: "Using ATMs and Mobile Banking",
      titleHindi: "एटीएम और मोबाइल बैंकिंग का उपयोग",
      description: "Learn how to use ATMs and your phone for banking safely",
      descriptionHindi: "एटीएम और फोन से सुरक्षित बैंकिंग करना सीखें"
    }
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
    <div className="flex items-center mb-6 border-b-2 border-gray-200 pb-4">
      <Calculator className="h-8 w-8 text-gray-600 mr-3" strokeWidth={2.5} />
      <div>
        <h1 className="text-2xl font-bold">Money Planning</h1>
        <h2 className="text-xl">पैसों की योजना</h2>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {lessons.map((lesson, index) => (
        <EducationCard 
          key={index} 
          title={lesson.title} 
          titleHindi={lesson.titleHindi}
        >
          <p className="text-gray-600 text-md mb-2">{lesson.description}</p>
          <p className="text-gray-700 text-md mb-2">{lesson.descriptionHindi}</p>
          <LearnMoreButton />
        </EducationCard>
      ))}
    </div>
  </div>
  );
};


export default Banking;
