import React from "react";
import {
  ChevronRight,
  PiggyBank,
  CreditCard,
  Calculator,
  Book,
} from "lucide-react";

// Custom Card Component to replace shadcn/ui Card
const CustomCard = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 ${className}`}
    >
      <div className="p-5 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

const Credit = () => {
  const creditFeatures = [
    {
      title: "Credit Score Monitoring",
      description: "Track your credit score and receive monthly updates",
    },
    {
      title: "Credit Cards",
      description:
        "Compare and apply for credit cards that match your lifestyle",
    },
    {
      title: "Credit Report Analysis",
      description: "Get detailed insights into your credit report",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <CreditCard className="h-8 w-8 text-purple-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Credit Management</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creditFeatures.map((feature, index) => (
          <CustomCard key={index} title={feature.title}>
            <p className="text-gray-600">{feature.description}</p>
          </CustomCard>
        ))}
      </div>
    </div>
  );
};

export default Credit;
