import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Blog | Neave Sheehan',
  description: 'Insights on data analytics, AI engineering, and dashboard design',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="text-brand-pink">Blog</span>
          </h1>
          <p className="text-xl text-gray-600">
            Thoughts on data, dashboards, and making analytics work
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No posts yet. Check back soon!</p>
            <p className="text-gray-500">
              Blog posts will appear here once you add them to the content/blog folder.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-display font-bold group-hover:text-brand-pink transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-brand-pink font-semibold group-hover:underline">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Newsletter />
    </div>
  );
}
