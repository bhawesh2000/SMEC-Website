import React from 'react';

const About = () => {
  return (
    <section className=" px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Silberhorn Marketing and Engineering Consulting Pvt. Ltd. (SMEC)
        </h1>
        
        {/* Introduction */}
        <div className="relative bg-cover bg-center p-8 rounded-lg shadow-lg mb-12 w-2/3 mx-auto text-center h-80 " style={{ backgroundImage: "url('https://images.pexels.com/photos/7653997/pexels-photo-7653997.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-800 opacity-70 rounded-lg"></div>
          
          {/* Centering the text vertically using flex */}
          <p className="text-xl text-white relative z-10 flex items-center justify-center h-full">
            At SMEC, we specialize in providing comprehensive solutions to help organizations achieve their sustainability,
            compliance, and operational excellence goals. Our expertise spans key areas critical to today’s business and environmental challenges.
          </p>
        </div>



        
        {/* Core Competencies Section */}
        <div className='ml-4'>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">Core Competencies</h2>
          
          {/* Grid Layout: 2 Competencies per Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Competency 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3dbed4d9] text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-[#001F4D]  mb-2">Sustainability and Net Zero Consulting</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Tailored strategies to achieve Net Zero goals.</li>
                  <li>GHG emission reductions aligned with global standards like the GHG Protocol.</li>
                </ul>
              </div>
            </div>

            {/* Competency 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3dbed4d9] text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-[#001F4D] mb-2">Carbon Accounting and Management</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Accurate carbon footprint assessments.</li>
                  <li>Cost-effective pathways for carbon reduction and trading.</li>
                </ul>
              </div>
            </div>

            {/* Competency 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3dbed4d9] text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-[#001F4D] mb-2">ESG Strategy Development</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Customized Environmental, Social, and Governance (ESG) frameworks.</li>
                  <li>Aligning with global ESG standards for investor confidence.</li>
                </ul>
              </div>
            </div>

            {/* Competency 4 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3dbed4d9] text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-[#001F4D] mb-2">Business Responsibility and Sustainability Reporting (BRSR)</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>End-to-end assistance for SEBI-compliant sustainability reporting.</li>
                  <li>Enhancing transparency and stakeholder trust.</li>
                </ul>
              </div>
            </div>

            {/* Competency 5 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3dbed4d9] text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
              <div>
                <h3 className="text-xl font-semibold text-[#001F4D] mb-2">Extended Producer Responsibility (EPR)</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Support in fulfilling EPR mandates for plastics and electronics.</li>
                  <li>Designing reverse logistics and recycling frameworks.</li>
                </ul>
              </div>
            </div>

            {/* Competency 6 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3dbed4d9] text-white rounded-full flex items-center justify-center text-xl font-bold">6</div>
              <div>
                <h3 className="text-xl font-semibold text-[#001F4D] mb-2">Customized Net Zero Tools</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Sector-specific tools to monitor emissions and track Net Zero progress.</li>
                  <li>Real-time analytics for informed decision-making.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
