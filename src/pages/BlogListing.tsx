import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { motion } from 'framer-motion';

const BlogListing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                    <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;