import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Test Page</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        If you can see this, routing is working correctly.
      </p>
    </div>
  );
};

export default TestPage;
