import React from 'react';
import { Heart, Sprout, HandHeart, Phone } from 'lucide-react';

function SocialMessage() {
  return (
    <section className="bg-green-50 py-16 mb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">A Message of Hope and Support</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="prose prose-lg text-gray-700 mb-8">
            <p className="text-xl mb-6 leading-relaxed">
              To every farmer across India, you are not alone in this journey. Your resilience, dedication, and hard work 
              feed our nation. Your struggles are acknowledged, your voices are heard, and your lives matter deeply to us all.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
              If you're facing difficulties, please reach out. There are people and organizations ready to support you. 
              Your life is precious, and together, we can find solutions to overcome these challenges.
            </p>
            <p className="text-xl font-semibold text-green-800">
              Remember: Every dawn brings new hope, and every challenge can be overcome together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <MessageCard
              icon={<Phone className="w-8 h-8 text-green-600" />}
              title="24/7 Helpline"
              content="Kisan Call Center: 1800-180-1551"
            />
            <MessageCard
              icon={<HandHeart className="w-8 h-8 text-green-600" />}
              title="Counseling Support"
              content="Free confidential counseling and guidance"
            />
            <MessageCard
              icon={<Sprout className="w-8 h-8 text-green-600" />}
              title="Agricultural Support"
              content="Expert advice on farming practices"
            />
            <MessageCard
              icon={<Heart className="w-8 h-8 text-green-600" />}
              title="Community Support"
              content="Local farmer support groups and networks"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">#StandWithFarmers</h3>
          <p className="text-lg text-gray-600">
            Together, let's build a stronger, more supportive agricultural community.
          </p>
        </div>
      </div>
    </section>
  );
}

function MessageCard({ icon, title, content }) {
  return (
    <div className="bg-green-50 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-green-800 mb-2">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

export default SocialMessage;