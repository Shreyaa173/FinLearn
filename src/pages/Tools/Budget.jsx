import React, { useState } from 'react';
import { Calculator, DollarSign, PiggyBank, ArrowRight } from 'lucide-react';

const Budget = () => {
  const [income, setIncome] = useState({
    salary: '',
    otherIncome: ''
  });
  
  const [expenses, setExpenses] = useState({
    housing: '',
    utilities: '',
    food: '',
    transport: '',
    healthcare: '',
    entertainment: '',
    other: ''
  });

  const totalIncome = Object.values(income).reduce((sum, val) => sum + (+val || 0), 0);
  const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + (+val || 0), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold">Budget Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Monthly Income</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Salary</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="number"
                  value={income.salary}
                  onChange={(e) => setIncome({...income, salary: e.target.value})}
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Other Income</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="number"
                  value={income.otherIncome}
                  onChange={(e) => setIncome({...income, otherIncome: e.target.value})}
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Monthly Expenses</h3>
          <div className="space-y-4">
            {Object.keys(expenses).map((expense) => (
              <div key={expense}>
                <label className="block text-sm text-gray-600 mb-1">
                  {expense.charAt(0).toUpperCase() + expense.slice(1)}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="number"
                    value={expenses[expense]}
                    onChange={(e) => setExpenses({...expenses, [expense]: e.target.value})}
                    className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Income</p>
            <p className="text-lg font-semibold text-green-600">${totalIncome.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Expenses</p>
            <p className="text-lg font-semibold text-red-600">${totalExpenses.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Balance</p>
            <p className={`text-lg font-semibold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${balance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;