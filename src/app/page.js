'use client'; // This is required for using client-side features like useState

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A list of quotes to display
const quotes = [
  { id: 1, text: "mn lagar kr padho tabhi to baat krne me v mn lgega", author: "Ni3" },
  { id: 2, text: "padhogi nhi to placement kasie milega, fir ghumogi kaise mere sath , padho 1 ghanta hi km se km", author: "Ni3" },
  { id: 3, text: "kv hmse baat v kr lo", author: "Ni3" },
  { id: 4, text: "Exam aa gya h or tm reel dekhne ka soch rhi ho book ki jagah", author: "Ni3" },
  { id: 4, text: "Snap one time mt bheja kro save nhi hota h", author: "Ni3" },
  { id: 5, text: "thoda sa hm pr dhyan dogi to dhyan bhatak nhi jayega padhai se", author: "Ni3" },
  { id: 4, text: "kv kv mera v photo dekh liya kro mood achha rahega", author: "Ni3" }
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