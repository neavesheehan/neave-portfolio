import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Hi, I'm <span className="text-brand-pink">Neave</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-display text-gray-600">
                AI Engineer & Data Analyst
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              I turn complex data into clean, decision-ready dashboards and automate the boring bits.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:neavesheehan@byneave.com"
                className="bg-brand-pink text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Email Me
              </a>
              <a
                href="/Neave-Sheehan-CV.pdf"
                download
                className="bg-white text-brand-navy border-2 border-brand-navy px-8 py-4 rounded-full font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>

            {/* LinkedIn */}
            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/neave-sheehan-4b374936a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-pink transition-colors font-medium group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="group-hover:underline">Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative animate-fadeIn animation-delay-300">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/neave.jpg"
                  alt="Neave Sheehan"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
