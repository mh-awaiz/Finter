import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Responses:", formData);
  };
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-3xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Form</h1>
        <p className="text-lg text-gray-400 mb-6">
          At Finter, our mission is to simplify financial insights for everyone.
        </p>

        <form onSubmit={handleSubmit} className="text-left">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            1. Basic Information
          </h2>
          <label>What is your age?</label>
          <input
            type="text"
            name="age"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <label>What is your current employment status?</label>
          <input
            type="text"
            name="employment"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <label>How would you describe your financial goals?</label>
          <input
            type="text"
            name="financialGoals"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            2. Investment Knowledge & Experience
          </h2>
          <label>How would you describe your experience with investing?</label>
          <input
            type="text"
            name="investmentExperience"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <label>
            What kind of financial assets are you most interested in?
          </label>
          <input
            type="text"
            name="financialAssets"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <label>How often do you monitor or manage your investments?</label>
          <input
            type="text"
            name="investmentTracking"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            3. Risk Tolerance & Decision-Making
          </h2>
          <label>How do you typically react to market volatility?</label>
          <input
            type="text"
            name="marketVolatility"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <label>
            Can you describe an investment decision you made in the past and how
            you felt about it afterward?
          </label>
          <input
            type="text"
            name="pastInvestmentDecision"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <label>
            If you lost a significant portion of your investment in a short
            period, what would you do next?
          </label>
          <input
            type="text"
            name="investmentLossResponse"
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
