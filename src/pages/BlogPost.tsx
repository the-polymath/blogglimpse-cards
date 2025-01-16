import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blogs" className="text-blue-500 hover:underline">
            Return to blog listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blogs
        </Link>
        
        <article>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <time className="text-gray-600">
              {new Date(blog.date).toLocaleDateString()}
            </time>
          </header>

          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPost;