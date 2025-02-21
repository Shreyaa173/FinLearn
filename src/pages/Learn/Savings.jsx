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

const Savings = () => {
    const products = [
      {
        title: "Savings Accounts",
        apy: "3.50% APY",
        description: "High-yield savings accounts with competitive rates"
      },
      {
        title: "Certificates of Deposit",
        apy: "4.25% APY",
        description: "Lock in great rates with terms from 3 months to 5 years"
      },
      {
        title: "Investment Options",
        description: "Explore our range of investment products and portfolios"
      }
    ];
  
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <PiggyBank className="h-8 w-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Savings & Investment</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <CustomCard key={index} title={product.title}>
              {product.apy && (
                <span className="block text-2xl font-bold text-green-600 mb-3">{product.apy}</span>
              )}
              <p className="text-gray-600">{product.description}</p>
            </CustomCard>
          ))}
        </div>
      </div>
    );
  };
  
  export default Savings;