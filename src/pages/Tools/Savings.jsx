import { IndianRupee, PiggyBank } from 'lucide-react';
import React, { useState } from 'react';

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
    <div className="max-w-4xl mx-auto p-4 bg-white border-2 border-gray-200 rounded-lg mt-[50px]">
      <div className="flex items-center mb-6">
        <PiggyBank className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-bold">Savings Calculator / बचत कैलकुलेटर</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium">
              Initial Amount / प्रारंभिक राशि
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                className="pl-10 w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">
              Monthly Saving / मासिक बचत
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className="pl-10 w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">
              Annual Return Rate / वार्षिक रिटर्न दर (%)
            </label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">
              Time Period / समय अवधि (Years / वर्ष)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
              placeholder="Years"
            />
          </div>
          <button
            onClick={calculateSavings}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-black transition-colors"
          >
            Calculate / गणना करें
          </button>
        </div>

        <div className="border-2 border-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Savings Projection / बचत प्रक्षेपण</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Future Value / भविष्य मूल्य</p>
              <p className="text-xl font-bold">₹{futureValue.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Contributions / कुल योगदान</p>
              <p className="text-xl font-bold">₹{totalContributions.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Interest / कुल ब्याज</p>
              <p className="text-xl font-bold">₹{totalInterest.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  export default Savings;