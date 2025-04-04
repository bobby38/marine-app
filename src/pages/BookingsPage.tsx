import React from 'react';

const BookingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <p className="text-gray-600 dark:text-gray-300">You don't have any bookings yet. Browse our services to make your first booking!</p>
    </div>
  );
};

export default BookingsPage;
