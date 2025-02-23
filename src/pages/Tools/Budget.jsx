import { Calculator, IndianRupee } from 'lucide-react';
import React, { useState } from 'react';

const Budget = () => {
  const [income, setIncome] = useState({
    salary: '',
    farming: '',
    business: '',
    other: ''
  });
  
  const [expenses, setExpenses] = useState({
    food: '',
    housing: '',
    education: '',
    healthcare: '',
    transport: '',
    other: ''
  });

  const totalIncome = Object.values(income).reduce((sum, val) => sum + (+val || 0), 0);
  const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + (+val || 0), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white border-2 border-gray-200 rounded-lg mt-[50px]">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-bold">Budget Calculator / बजट कैलकुलेटर</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-4">Monthly Income / मासिक आय</h3>
          <div className="space-y-4">
            {Object.entries({
              salary: 'Salary / वेतन',
              farming: 'Farming / कृषि',
              business: 'Business / व्यवसाय',
              other: 'Other / अन्य'
            }).map(([key, label]) => (
              <div key={key}>
                <label className="block text-sm mb-1 font-medium">{label}</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                  <input
                    type="number"
                    value={income[key]}
                    onChange={(e) => setIncome({...income, [key]: e.target.value})}
                    className="pl-10 w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Monthly Expenses / मासिक खर्च</h3>
          <div className="space-y-4">
            {Object.entries({
              food: 'Food / भोजन',
              housing: 'Housing / आवास',
              education: 'Education / शिक्षा',
              healthcare: 'Healthcare / स्वास्थ्य',
              transport: 'Transport / परिवहन',
              other: 'Other / अन्य'
            }).map(([key, label]) => (
              <div key={key}>
                <label className="block text-sm mb-1 font-medium">{label}</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                  <input
                    type="number"
                    value={expenses[key]}
                    onChange={(e) => setExpenses({...expenses, [key]: e.target.value})}
                    className="pl-10 w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 border-2 border-gray-200 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium">Total Income / कुल आय</p>
            <p className="text-lg font-bold">₹{totalIncome.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Total Expenses / कुल खर्च</p>
            <p className="text-lg font-bold">₹{totalExpenses.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Balance / शेष</p>
            <p className="text-lg font-bold">₹{balance.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Budget;