import React from 'react'
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md p-8 bg-gray-900 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-500 mb-6">
        Your submission has been received successfully.
        Your Feedback Matters to Us!!!
      </p>
      <Link 
        to="/" 
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  </div>
  )
}

export default Thanks