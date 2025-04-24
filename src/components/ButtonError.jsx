import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ButtonGoback = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row items-center mt-6 gap-3 sm:gap-x-3">
      <button
        onClick={() => navigate(-1)}
        className="w-full sm:w-auto px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg flex items-center justify-center gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>Go back</span>
      </button>

      <Link to="/" className="w-full sm:w-auto">
        <button className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
          Take me home
        </button>
      </Link>
    </div>
  );
};

export default ButtonGoback;
