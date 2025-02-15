import React from 'react';

function StateAnalysis() {
  return (
    <section id="analysis" className="mb-16">
      <h2 className="text-3xl font-bold text-green-800 mb-6">State-wise Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {states.map((state, index) => (
          <StateCard key={index} {...state} />
        ))}
      </div>

      {/* Regional Analysis */}
      <div className="mt-12 bg-green-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Regional Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RegionCard
            name="Western Region"
            states={["Maharashtra", "Gujarat", "Rajasthan"]}
            characteristics={[
              "Highest concentration of cases",
              "Drought-prone areas",
              "High cotton farming",
              "Significant small farmer population"
            ]}
          />
          
          <RegionCard
            name="Southern Region"
            states={["Karnataka", "Andhra Pradesh", "Tamil Nadu", "Kerala"]}
            characteristics={[
              "Second highest case concentration",
              "Mixed cropping patterns",
              "Better irrigation infrastructure",
              "Higher literacy rates"
            ]}
          />
          
          <RegionCard
            name="Central Region"
            states={["Madhya Pradesh", "Chhattisgarh"]}
            characteristics={[
              "Moderate to high cases",
              "Tribal farming communities",
              "Limited institutional credit",
              "Poor irrigation coverage"
            ]}
          />
          
          <RegionCard
            name="Northern Region"
            states={["Punjab", "Haryana", "Uttar Pradesh"]}
            characteristics={[
              "Lower case numbers",
              "Better irrigation facilities",
              "Higher institutional support",
              "More diversified agriculture"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function StateCard({ name, cases, factors, initiatives }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-green-700 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">Reported cases: {cases}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-green-800 mb-2">Contributing Factors:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {factors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-green-800 mb-2">Current Initiatives:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {initiatives.map((initiative, index) => (
            <li key={index}>{initiative}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RegionCard({ name, states, characteristics }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-xl font-bold text-green-700 mb-4">{name}</h4>
      
      <div className="mb-4">
        <h5 className="font-semibold text-green-800 mb-2">States:</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {states.map((state, index) => (
            <li key={index}>{state}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h5 className="font-semibold text-green-800 mb-2">Key Characteristics:</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {characteristics.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const states = [
  {
    name: "Maharashtra",
    cases: "12,318",
    factors: [
      "Drought-prone regions",
      "High debt burden",
      "Crop failure",
      "Cotton farming crisis",
      "Limited irrigation coverage"
    ],
    initiatives: [
      "Loan waiver program",
      "Drought relief measures",
      "Agricultural insurance schemes",
      "Farm pond scheme",
      "Organic farming promotion"
    ]
  },
  {
    name: "Karnataka",
    cases: "6,577",
    factors: [
      "Market price fluctuations",
      "Limited irrigation coverage",
      "High input costs",
      "Monsoon dependency",
      "Small landholding size"
    ],
    initiatives: [
      "Price support mechanisms",
      "Irrigation projects",
      "Organic farming promotion",
      "Farmer training programs",
      "Direct benefit transfers"
    ]
  },
  {
    name: "Madhya Pradesh",
    cases: "2,047",
    factors: [
      "Low irrigation coverage (40%)",
      "High dependence on rainfall",
      "Limited access to credit",
      "Small and marginal farmers (65%)",
      "Low mechanization"
    ],
    initiatives: [
      "Mukhyamantri Kisan Kalyan Yojana",
      "Farm mechanization support",
      "Irrigation infrastructure development",
      "Crop insurance coverage expansion",
      "Farmer producer organizations"
    ]
  },
  {
    name: "Andhra Pradesh",
    cases: "2,871",
    factors: [
      "Cyclone-prone areas",
      "Groundwater depletion",
      "High pesticide costs",
      "Market access issues",
      "Labor shortage"
    ],
    initiatives: [
      "Zero-budget natural farming",
      "Crop insurance coverage",
      "Solar pump installation",
      "Market linkage programs",
      "Skill development"
    ]
  },
  {
    name: "Tamil Nadu",
    cases: "1,804",
    factors: [
      "Water scarcity",
      "Urbanization pressure",
      "Labor migration",
      "Climate change impact",
      "High production costs"
    ],
    initiatives: [
      "Kudimaramathu scheme",
      "Micro-irrigation support",
      "Farmer producer organizations",
      "Climate resilient agriculture",
      "Agricultural mechanization"
    ]
  }
];

export default StateAnalysis;