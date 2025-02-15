import React from 'react';
import { BarChart3, LineChart, PieChart, ScrollText, Sprout, Users2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataVisualization from './components/DataVisualization';
import StateAnalysis from './components/StateAnalysis';
import Recommendations from './components/Recommendations';
import SocialMessage from './components/SocialMessage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              icon={<Users2 className="w-8 h-8 text-green-600" />}
              title="Total Cases"
              value="31,500+"
              description="Farmer suicides recorded between 2020-2022"
            />
            <StatCard 
              icon={<LineChart className="w-8 h-8 text-green-600" />}
              title="Trend"
              value="7%"
              description="Increase in cases from 2020-2022"
            />
            <StatCard 
              icon={<BarChart3 className="w-8 h-8 text-green-600" />}
              title="States Affected"
              value="28"
              description="States"
            />
          </div>
        </section>

        <DataVisualization />
        <StateAnalysis />
        <Recommendations />
        <SocialMessage />
      </main>
      
      <Footer />
    </div>
  );
}

function StatCard({ icon, title, value, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-green-700 mb-2">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;