export default function Testimonials() {
  const testimonials = [
    {
      quote: "Your work on the dashboards has been truly transformative, positioning us optimally to drive significant change through 2026.",
      author: "Manager",
      role: "Senior Leadership"
    },
    {
      quote: "Brilliant Neave, the dashboard set ups are first class and a great addition to help us all out.",
      author: "RFM",
      role: "Facilities Management"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-brand-navy to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What People <span className="text-brand-pink">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feedback from colleagues and stakeholders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-brand-pink/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-brand-pink opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-lg">{testimonial.author}</p>
                <p className="text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
