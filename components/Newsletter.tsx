'use client';

export default function Newsletter() {
  return (
    <div className="bg-gradient-to-br from-brand-pink to-purple-600 py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Get weekly insights on dashboards, data analytics, what's new with AI, and making work less boring.
          No spam, just the good stuff.
        </p>
        
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/neavesheehan"
          method="post"
          target="popupwindow"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            required
            className="flex-1 px-6 py-4 rounded-full text-brand-navy focus:outline-none focus:ring-4 focus:ring-white/50"
          />
          <button
            type="submit"
            className="bg-white text-brand-pink px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-white/70 text-sm mt-4">
          Unsubscribe anytime. I respect your inbox.
        </p>
      </div>
    </div>
  );
}