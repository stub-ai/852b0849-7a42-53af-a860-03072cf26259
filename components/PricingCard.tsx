import React from 'react';

interface Plan {
  name: string;
  price: number;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
      <p className="text-xl font-semibold mb-4">${plan.price}/mo</p>
      <ul className="mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-auto">Sign Up</button>
    </div>
  );
};

export default PricingCard;