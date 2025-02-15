import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About This Project</h3>
            <p className="text-gray-300">
              Analysis and Recommendations by Rohit Raghuwanshi
              <br />
              Made with ❤️ for Indian Farmers
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Data Sources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Government Agricultural Statistics</li>
              <li>National Crime Records Bureau</li>
              <li>State Agricultural Departments</li>
              <li>Research Institutions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/rohitraghuwanshi07" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:rohitraghuwanshi2005@gmail.com" className="text-white hover:text-gray-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-raghuwanshi-a4077628a" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-gray-300">
          <p>© 2024 Farmer Welfare Analysis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;