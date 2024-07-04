const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Coming Soon!</h2>
        <p className="text-center text-gray-600 mb-8">This page is under construction. Stay tuned for updates.</p>
        <div className="flex justify-center">
          <div className="rounded-full bg-primary p-4">
            <svg
              className="w-12 h-12 text-white mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
