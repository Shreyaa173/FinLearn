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

const Financial = () => {
    const planningTools = [
      {
        title: "Budget Calculator",
        description: "Create and manage your monthly budget"
      },
      {
        title: "Retirement Planning",
        description: "Plan for your retirement with our calculator tools"
      },
      {
        title: "Financial Goals",
        description: "Set and track your short and long-term financial goals"
      }
    ];
  
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Calculator className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Financial Planning</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {planningTools.map((tool, index) => (
            <CustomCard key={index} title={tool.title}>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </CustomCard>
          ))}
        </div>
      </div>
    );
  };

  export default Financial;