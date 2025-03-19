import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
