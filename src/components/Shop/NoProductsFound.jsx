const NoProductsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-10">
      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
      <h2 className="mt-4 text-lg font-semibold text-gray-700">No Products Found</h2>
    </div>
  );
};

export default NoProductsFound;
