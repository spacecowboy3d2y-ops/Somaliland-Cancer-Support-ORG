import React from 'react';

const GoalCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-brand-light-purple/50 border-l-4 border-brand-purple p-6 rounded-r-lg h-full">
        <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
        <p className="text-gray-700">{children}</p>
    </div>
);


const Goals: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="rounded-xl shadow-lg overflow-hidden">
        <img src="https://placehold.co/1200x300/a076a8/f3e8f5?text=Our+Strategic+Goals" alt="Our Goals Banner" className="w-full h-full object-cover"/>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-12">
        <section>
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Our Strategic Goals</h1>
          <div className="w-24 h-1 bg-brand-purple mb-6"></div>
          <div className="space-y-6">
              <p className="flex items-start text-lg">
                  <svg className="w-7 h-7 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-gray-800">Promote cancer awareness, prevention, and early detection.</span>
              </p>
              <p className="flex items-start text-lg">
                  <svg className="w-7 h-7 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-gray-800">Provide support, medically and empower, and advocate for cancer patients and their families.</span>
              </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Objectives</h2>
          <div className="w-24 h-1 bg-brand-purple mb-6"></div>
          <div className="grid md:grid-cols-2 gap-6">
              <GoalCard title="Health Awareness & Volunteering">
                  Promote health education and volunteerism in schools, universities, and the wider community through workshops, exhibitions, and campaigns.
              </GoalCard>
              <GoalCard title="Community Engagement">
                  Conduct outreach programs and awareness initiatives to empower public health involvement in cancer prevention and support.
              </GoalCard>
              <GoalCard title="Cancer Registration & Prevention">
                  Facilitate cancer data collection, implement prevention strategies, and establish social care programs.
              </GoalCard>
              <GoalCard title="Research & Scientific Collaboration">
                  Support cancer research, organize seminars, and work with scientific institutions, private entities, and international organizations to improve cancer care.
              </GoalCard>
              <GoalCard title="Support for Patients & Families">
                  Assist vulnerable families with food, clothing, medicine, and emotional support.
              </GoalCard>
               <GoalCard title="Advocacy & Policy">
                  Advocate for better healthcare policies and increased government funding for cancer treatment and research facilities in Somaliland.
              </GoalCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Goals;
