import React, { useState } from 'react';
import { Calculator, DollarSign, PiggyBank, ArrowRight } from 'lucide-react';

const Savings = () => {
    const [initialAmount, setInitialAmount] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [years, setYears] = useState('');
    const [futureValue, setFutureValue] = useState(0);
    const [totalContributions, setTotalContributions] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
  
    const calculateSavings = () => {
      const principal = parseFloat(initialAmount) || 0;
      const monthly = parseFloat(monthlyContribution) || 0;
      const rate = (parseFloat(annualReturn) || 0) / 100 / 12;
      const months = (parseFloat(years) || 0) * 12;
  
      if (months > 0) {
        const futureVal = principal * Math.pow(1 + rate, months) +
          monthly * ((Math.pow(1 + rate, months) - 1) / rate);
        
        const totalContrib = principal + (monthly * months);
        
        setFutureValue(futureVal);
        setTotalContributions(totalContrib);
        setTotalInterest(futureVal - totalContrib);
      }
    };
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
        <div className="flex items-center mb-6">
          <PiggyBank className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold">Savings Planner</h2>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Initial Amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="number"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(e.target.value)}
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Monthly Contribution</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Annual Return Rate (%)</label>
              <input
                type="number"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Time Period (Years)</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Years"
              />
            </div>
            <button
              onClick={calculateSavings}
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Calculate
            </button>
          </div>
  
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Savings Projection</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Future Value</p>
                <p className="text-xl font-semibold text-green-600">
                  ${futureValue.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Contributions</p>
                <p className="text-xl font-semibold text-blue-600">
                  ${totalContributions.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Interest Earned</p>
                <p className="text-xl font-semibold text-green-600">
                  ${totalInterest.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Savings;