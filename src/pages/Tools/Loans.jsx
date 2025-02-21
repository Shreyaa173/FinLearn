import React, { useState } from 'react';
import { Calculator, DollarSign, PiggyBank, ArrowRight } from 'lucide-react';

const Loans= () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
  
    const calculateLoan = () => {
      const principal = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 100 / 12;
      const months = parseFloat(loanTerm) * 12;
  
      if (principal && rate && months) {
        const x = Math.pow(1 + rate, months);
        const monthly = (principal * x * rate) / (x - 1);
        
        setMonthlyPayment(monthly);
        setTotalPayment(monthly * months);
        setTotalInterest((monthly * months) - principal);
      }
    };
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
        <div className="flex items-center mb-6">
          <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold">Loan Calculator</h2>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Loan Amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Annual Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Years"
              />
            </div>
            <button
              onClick={calculateLoan}
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Calculate
            </button>
          </div>
  
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Loan Summary</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>
                <p className="text-xl font-semibold text-blue-600">
                  ${monthlyPayment.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Payment</p>
                <p className="text-xl font-semibold text-blue-600">
                  ${totalPayment.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Interest</p>
                <p className="text-xl font-semibold text-blue-600">
                  ${totalInterest.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Loans;