import { IndianRupee } from 'lucide-react';
import React, { useState } from 'react';

const Loans = () => {
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
    <div className="max-w-4xl mx-auto mt-[50px] p-4 bg-white border-2 border-gray-200 rounded-lg">
      <div className="flex items-center mb-6">
        <IndianRupee className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-bold">Loan Calculator / ऋण कैलकुलेटर</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium">Loan Amount / ऋण राशि</label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="pl-10 w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">
              Annual Interest Rate / वार्षिक ब्याज दर (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">
              Loan Term / ऋण अवधि (Years / वर्ष)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none"
              placeholder="Years"
            />
          </div>
          <button
            onClick={calculateLoan}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-black transition-colors"
          >
            Calculate / गणना करें
          </button>
        </div>

        <div className="border-2 border-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Loan Summary / ऋण सारांश</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Monthly Payment / मासिक भुगतान</p>
              <p className="text-xl font-bold">₹{monthlyPayment.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Payment / कुल भुगतान</p>
              <p className="text-xl font-bold">₹{totalPayment.toFixed(2)}</p>
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

  export default Loans;