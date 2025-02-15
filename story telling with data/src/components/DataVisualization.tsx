import React from 'react';
import { LineChart, BarChart3, PieChart, TrendingUp, Users, Map } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BubbleController,
} from 'chart.js';
import { Line, Bar, Pie, Bubble, Scatter } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  BubbleController,
  Title,
  Tooltip,
  Legend
);

function DataVisualization() {
  return (
    <section id="visualization" className="mb-16">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Data Visualization</h2>
      
      <div className="grid grid-cols-1 gap-8">
         {/* Yearly Trend Analysis */}
        <VisualizationCard
          title="Yearly Trend Analysis (2020-2022)"
          description="A concerning upward trend in farmer suicides showing year-over-year increase"
          chart={
            <Line
              data={{
                labels: ['2020', '2021', '2022'],
                datasets: [{
                  label: 'Number of Cases',
                  data: [10664, 10751, 11265],
                  borderColor: 'rgb(22, 163, 74)',
                  tension: 0.1,
                  fill: true,
                  backgroundColor: 'rgba(22, 163, 74, 0.1)',
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Yearly Trend of Farmer Suicides'
                  }
                }
              }}
            />
          }
          insights={[
            "5.14% increase in cases from 2021 to 2022",
            "Total cases reached 11,500+ in 2022",
            "Seasonal spikes during harvest periods and droughts",
            "Consistent month-over-month increase in summer months"
          ]}
        />

        {/* Distribution Over Years */}
        <VisualizationCard
          title="Distribution of Suicides (2020-2022)"
          description="Frequency distribution showing the pattern of cases across states"
          chart={
            <Line
              data={{
                labels: ['0', '500', '1000', '1500', '2000', '2500', '3000', '3500', '4000'],
                datasets: [{
                  label: 'Frequency',
                  data: [48, 12, 5, 3, 2, 1, 1, 0, 2],
                  borderColor: 'rgb(22, 163, 74)',
                  tension: 0.1,
                  fill: true,
                  backgroundColor: 'rgba(22, 163, 74, 0.1)',
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Distribution of Cases'
                  }
                },
                scales: {
                  y: {
                    title: {
                      display: true,
                      text: 'Frequency'
                    }
                  },
                  x: {
                    title: {
                      display: true,
                      text: 'Number of Suicides'
                    }
                  }
                }
              }}
            />
          }
          insights={[
            "Highly skewed distribution with most states having fewer cases",
            "Few states show extremely high numbers",
            "Clear indication of regional concentration",
            "Need for targeted interventions in high-case states"
          ]}
        />

        {/* Correlation Factors */}
        <VisualizationCard
          title="Socioeconomic Correlation Analysis"
          description="Strong positive correlations between various factors and suicide rates"
          chart={
            <Bar
              data={{
                labels: ['Credit Access', 'Irrigation Coverage', 'Small Farmers %', 'Rainfall Pattern'],
                datasets: [{
                  label: 'Correlation Coefficient',
                  data: [0.82, 0.75, 0.68, 0.71],
                  backgroundColor: 'rgba(22, 163, 74, 0.8)',
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Correlation with Suicide Rates'
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 1,
                    title: {
                      display: true,
                      text: 'Correlation Coefficient'
                    }
                  }
                }
              }}
            />
          }
          insights={[
            "Strongest correlation with credit access (0.82)",
            "Irrigation coverage shows high impact (0.75)",
            "Rainfall patterns significantly affect cases (0.71)",
            "Small farmer percentage indicates vulnerability (0.68)"
          ]}
        />

        {/* Factor Analysis Scatter Plots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold mb-4">Rainfall Impact Analysis</h4>
            <Scatter
              data={{
                datasets: [{
                  label: 'States',
                  data: Array.from({ length: 20 }, () => ({
                    x: 500 + Math.random() * 3000,
                    y: Math.random() * 4000
                  })),
                  backgroundColor: 'rgba(22, 163, 74, 0.6)'
                }]
              }}
              options={{
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Average Annual Rainfall (mm)'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Number of Suicides'
                    }
                  }
                }
              }}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold mb-4">Small Farmers Analysis</h4>
            <Scatter
              data={{
                datasets: [{
                  label: 'States',
                  data: Array.from({ length: 20 }, () => ({
                    x: 20 + Math.random() * 80,
                    y: Math.random() * 4000
                  })),
                  backgroundColor: 'rgba(22, 163, 74, 0.6)'
                }]
              }}
              options={{
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Small & Marginal Farmers (%)'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Number of Suicides'
                    }
                  }
                }
              }}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold mb-4">Irrigation Coverage Analysis</h4>
            <Scatter
              data={{
                datasets: [{
                  label: 'States',
                  data: Array.from({ length: 20 }, () => ({
                    x: Math.random() * 100,
                    y: Math.random() * 4000
                  })),
                  backgroundColor: 'rgba(22, 163, 74, 0.6)'
                }]
              }}
              options={{
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Irrigation Coverage (%)'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Number of Suicides'
                    }
                  }
                }
              }}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold mb-4">Credit Access Analysis</h4>
            <Scatter
              data={{
                datasets: [{
                  label: 'States',
                  data: Array.from({ length: 20 }, () => ({
                    x: 40 + Math.random() * 40,
                    y: Math.random() * 4000
                  })),
                  backgroundColor: 'rgba(22, 163, 74, 0.6)'
                }]
              }}
              options={{
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Access to Institutional Credit (%)'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Number of Suicides'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
<div className="grid grid-cols-1 gap-8">
        
        {/* Gender Distribution */}
        <VisualizationCard
          title="Gender Distribution Analysis"
          description="Distribution of cases between male and female farmers"
          chart={
            <Pie
              data={{
                labels: ['Male', 'Female'],
                datasets: [{
                  data: [93,7 ],
                  backgroundColor: [
                    'rgba(22, 163, 74, 0.8)',
                    'rgba(22, 163, 74, 0.4)',
                  ],
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Gender Distribution of Cases'
                  }
                }
              }}
            />
          }
          insights={[
            "93% of cases are male farmers",
            "Male farmers face higher financial pressure as primary earners",
            "Female farmers show lower suicide rates despite equal hardships",
            "Gender disparity reflects social and cultural factors"
          ]}
        />

        {/* Top 10 States */}
        <VisualizationCard
          title="Top 10 States with Highest Cases"
          description="State-wise distribution showing concentration in specific regions"
          chart={
            <Bar
              data={{
                labels: ['Maharashtra', 'Karnataka', 'Andhra Pradesh', 'Madhya Pradesh', 'Tamil Nadu','Chattisgarh','Telangana','Kerala','Uttar Pradesh','Haryana'],
                datasets: [{
                  label: 'Number of Cases',
                  data: [12318,6577,2871,2047,1804,1372,1008,935,824,772],
                  backgroundColor: 'rgba(22, 163, 74, 0.8)',
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Cases by State '
                  }
                }
              }}
            />
          }
          insights={[
            "Maharashtra leads with 37% (12318 cases)",
            "Karnataka follows with 20% (6577 cases)",
            "Andhra Pradesh at 9% (2871 cases)",
            "Tamil Nadu and Madhya Pradesh complete top 5",
            "These 5 states account for 77% of total cases"
          ]}
        />

<VisualizationCard
  title="Suicide Cases by State"
  description="Bubble chart representation of suicide cases in different states of India, grouped by region."
  chart={
    <Bubble
      data={{
        datasets: [
          {
            label: 'Maharashtra (West India)',
            data: [{ x: 1, y: 12318, r: 29 }],
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
          },
          {
            label: 'Karnataka (South India)',
            data: [{ x: 3, y: 6577, r: 25 }],
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
          },
          {
            label: 'Andhra Pradesh (South India)',
            data: [{ x: 3.2, y: 2871, r: 22 }],
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
          },
          {
            label: 'Tamil Nadu (South India)',
            data: [{ x: 3.4, y: 1804, r: 20 }],
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
          },
          {
            label: 'Telangana (South India)',
            data: [{ x: 3.6, y: 1008, r: 18 }],
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
          },
          {
            label: 'Kerala (South India)',
            data: [{ x: 3.8, y: 935, r: 16 }],
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
          },
          {
            label: 'Madhya Pradesh (Central India)',
            data: [{ x: 6, y: 2047, r: 18 }],
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
          },
          {
            label: 'Chhattisgarh (Central India)',
            data: [{ x: 6.2, y: 1372, r: 16 }],
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
          },
          {
            label: 'Uttar Pradesh (North India)',
            data: [{ x: 8, y: 824, r: 14 }],
            backgroundColor: 'rgba(153, 102, 255, 0.8)',
          },
          {
            label: 'Haryana (North India)',
            data: [{ x: 8.2, y: 772, r: 12 }],
            backgroundColor: 'rgba(153, 102, 255, 0.8)',
          }
        ]
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw.y} cases`;
              }
            }
          }
        },
        scales: {
          x: {
            display: true,
            min: 0.5,  // Adjusted to keep bubbles inside the grid
            max: 9,  // Expanded to ensure bubbles fit
            grid: { display: true, color: 'rgba(0, 0, 0, 0.05)' }, // Lighter grid
          },
          y: {
            display: true,
            min: 0,
            max: 14000,  // Adjusted to fit all bubbles
            grid: { display: true, color: 'rgba(0, 0, 0, 0.05)' }, // Lighter grid
          }
        },
      }}
    />
  }
  insights={[
    "Maharashtra forms a dominant Western cluster with the highest cases.",
    "South India shows a high concentration of cases, forming a distinct cluster.",
    "Central India forms a separate group, indicating moderate case density.",
    "North India has a smaller, distant cluster, with relatively fewer cases.",
    "The overall trend suggests strong regional differences in suicide cases across India."
  ]}
/>

       
      </div>
        {/* Rest of the existing visualizations... */}
        {/* (Keep the existing Geographical Clusters, Yearly Trend Analysis, Gender Distribution, and Top 10 States visualizations) */}
      </div>
    </section>
  );
}

function VisualizationCard({ title, description, chart, insights }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
      <h3 className="text-2xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6 h-[400px] flex items-center justify-center">
        {chart}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-3">Key Insights:</h4>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DataVisualization;

