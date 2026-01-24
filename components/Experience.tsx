export default function Experience() {
  const experiences = [
    {
      title: 'AI Engineer Apprenticeship',
      company: 'Corndel',
      period: '2024 - Present',
      achievements: [
        'Designed and deployed three enterprise-level compliance dashboards, directly supporting regulatory adherence across facilities management',
        'Automated manual reporting processes, reducing weekly administrative burden by 20+ hours and improving data accuracy by 40%',
        'Collaborated with senior stakeholders to translate complex operational requirements into actionable analytics solutions',
        'Delivered executive-ready presentations on dashboard insights, driving data-informed decision-making at the leadership level',
        'Implemented best-practice data modeling techniques, ensuring scalability and maintainability of analytics infrastructure'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-brand-pink">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building data solutions that drive business outcomes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-brand-pink font-semibold">{exp.company}</p>
                </div>
                <div className="text-gray-600 font-medium">{exp.period}</div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-brand-pink text-xl flex-shrink-0 mt-1">▸</span>
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Power BI',
                'Python',
                'SQL',
                'Data Modeling',
                'Dashboard Design',
                'Stakeholder Management',
                'Process Automation',
                'Business Intelligence',
                'Data Visualization',
                'Excel'
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full font-medium border border-brand-pink/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
