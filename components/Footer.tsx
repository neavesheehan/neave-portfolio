import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Neave Sheehan</h3>
            <p className="text-gray-300">
              AI Engineer & Data Analyst
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#experience" className="text-gray-300 hover:text-brand-pink transition-colors">
                Experience
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-brand-pink transition-colors">
                Portfolio
              </a>
              <Link href="/blog" className="text-gray-300 hover:text-brand-pink transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:neavesheehan@byneave.com" 
                className="text-gray-300 hover:text-brand-pink transition-colors"
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/neave-sheehan-4b374936a" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-pink transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="/Neave-Sheehan-CV.pdf" 
                download
                className="text-gray-300 hover:text-brand-pink transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Neave Sheehan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
