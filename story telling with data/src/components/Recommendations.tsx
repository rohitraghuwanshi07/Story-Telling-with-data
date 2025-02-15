import React from 'react';
import { ShieldCheck, Droplet, Ban as Bank, BookOpen, Phone, Heart, Sprout, HandHeart } from 'lucide-react';

function Recommendations() {
  return (
    <section id="recommendations" className="mb-16">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Recommendations</h2>
      
      {/* Government Initiatives */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 mb-6">Government Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <InitiativeCard
            title="Financial Protection"
            items={[
              {
                name: "PM-KISAN Scheme",
                description: "Direct income support of ₹6,000 per year to farmer families"
              },
              {
                name: "Crop Insurance",
                description: "Pradhan Mantri Fasal Bima Yojana for crop loss protection"
              },
              {
                name: "Interest Subvention",
                description: "Reduced interest rates on agricultural loans"
              },
              {
                name: "Debt Relief Programs",
                description: "State-specific loan waiver schemes for distressed farmers"
              }
            ]}
          />
          
          <InitiativeCard
            title="Agricultural Support"
            items={[
              {
                name: "Irrigation Projects",
                description: "Pradhan Mantri Krishi Sinchayee Yojana for improved water access"
              },
              {
                name: "Soil Health Management",
                description: "Free soil testing and nutrient recommendations"
              },
              {
                name: "Extension Services",
                description: "Technical knowledge transfer and best practices"
              },
              {
                name: "Weather Information",
                description: "Early warning systems and crop advisories"
              }
            ]}
          />
        </div>
      </div>
      
      {/* Recommended Measures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecommendationCard
          icon={<ShieldCheck className="w-8 h-8 text-green-600" />}
          title="Financial Measures"
          recommendations={[
            "Enhanced Credit Access - Streamline institutional lending processes",
            "Insurance Reform - Develop comprehensive, easy-to-access products",
            "Price Stabilization - Strengthen MSP implementation",
            "Collective Farming - Promote farmer producer organizations"
          ]}
        />
        
        <RecommendationCard
          icon={<Droplet className="w-8 h-8 text-green-600" />}
          title="Infrastructure Development"
          recommendations={[
            "Expand irrigation coverage in drought-prone areas",
            "Improve water management systems",
            "Develop climate-resilient agriculture practices",
            "Establish modern storage facilities"
          ]}
        />
        
        <RecommendationCard
          icon={<Bank className="w-8 h-8 text-green-600" />}
          title="Social Support"
          recommendations={[
            "Establish dedicated mental health counseling centers",
            "Create farmer support groups and networks",
            "Provide training in modern farming techniques",
            "Implement comprehensive family support programs"
          ]}
        />
        
        <RecommendationCard
          icon={<BookOpen className="w-8 h-8 text-green-600" />}
          title="Education & Training"
          recommendations={[
            "Modern farming techniques training programs",
            "Financial literacy and management courses",
            "Sustainable agriculture practices workshops",
            "Digital skills and market access training"
          ]}
        />
      </div>
      
      {/* Emergency Resources */}
      <div className="mt-12 bg-green-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Emergency Resources</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <EmergencyCard
            icon={<Phone className="w-8 h-8 text-green-600" />}
            title="Kisan Call Center"
            contact="1800-180-1551"
          />
          <EmergencyCard
            icon={<Phone className="w-8 h-8 text-green-600" />}
            title="Emergency"
            contact="112"
          />
          <EmergencyCard
            icon={<Heart className="w-8 h-8 text-green-600" />}
            title="Mental Health"
            contact="1800-599-0019"
          />
          <EmergencyCard
            icon={<HandHeart className="w-8 h-8 text-green-600" />}
            title="Support Center"
            contact="1800-120-4343"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OnlineResourceCard
            title="Agricultural Resources"
            resources={[
              "Agricultural Extension Portal - Expert advice",
              "Weather Services - Real-time updates",
              "Market Information - Current prices",
              "Government Schemes Portal"
            ]}
          />
          <OnlineResourceCard
            title="Support Services"
            resources={[
              "24/7 Online Counseling",
              "Financial Advisory Services",
              "Legal Aid Resources",
              "Community Support Networks"
            ]}
          />
        </div>
      </div>
      
      <div className="mt-12 bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-green-800 mb-4">Urgent Action Items</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">1.</span>
            <span>Immediate implementation of comprehensive insurance coverage for all farmers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">2.</span>
            <span>Establishment of 24/7 farmer helpline in all states</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">3.</span>
            <span>Creation of rapid response teams for drought-affected regions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">4.</span>
            <span>Implementation of guaranteed minimum income support</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">5.</span>
            <span>Development of comprehensive mental health support network</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function InitiativeCard({ title, items }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-xl font-bold text-green-700 mb-4">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="border-b border-green-100 pb-3 last:border-0 last:pb-0">
            <h5 className="font-semibold text-green-800 mb-1">{item.name}</h5>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecommendationCard({ icon, title, recommendations }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-green-700">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {recommendations.map((rec, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600">•</span>
            <span>{rec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmergencyCard({ icon, title, contact }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-green-800 mb-2">{title}</h4>
      <p className="text-green-600 font-bold">{contact}</p>
    </div>
  );
}

function OnlineResourceCard({ title, resources }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-lg font-semibold text-green-800 mb-4">{title}</h4>
      <ul className="space-y-2">
        {resources.map((resource, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600">•</span>
            <span className="text-gray-700">{resource}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;