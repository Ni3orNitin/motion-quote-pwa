'use client'; // This is required for using client-side features like useState

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A list of quotes to display
const quotes = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 3, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { id: 4, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
];

// Animation variants for the quote
const quoteVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6, ease: "easeIn" } },
};

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleNextQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="text-center max-w-3xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={quotes[quoteIndex].id} // `key` is essential for Framer Motion to animate changes
            initial="initial"
            animate="animate"
            exit="exit"
            variants={quoteVariants}
            className="font-serif"
          >
            <p className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-center">
              "{quotes[quoteIndex].text}"
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              - {quotes[quoteIndex].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={handleNextQuote}
        className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Next Quote
      </button>
    </div>
  );
}