import React from "react";

const Services1 = () => {
  return (
    <div className="py-2 bg-gray-100 font-publicSans py-20 px-0 sm:px-8 sm:py-10 sm:mt-[calc(var(--header-height,40px))] mt-[calc(var(--header-height,20px))]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-2xl  font-semibold text-gray-600">Services We Offer</h6>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-2">Our Stock Market / Forex Research</h2>
          <p className="text-gray-600 text-md font-medium mt-4">
            We provide high-quality & accurate calls in the stock market. Our stock market experts offer the best Option Tips service for the Indian Market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://growmorecapitals.com/wp-content/uploads/2025/06/analysis.png"
                alt="Intraday"
                className="w-16 h-16"
              />
            </div>
            <h5 className="text-lg font-semibold text-center mb-2">Intraday</h5>
            <p className="text-gray-600 text-md sm:text-sm text-center">
              All our Day Trading calls are the recommendations or best opinions generated from technical & fundamental data analytics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://growmorecapitals.com/wp-content/uploads/2025/06/attention.png"
                alt="Futures & Options"
                className="w-16 h-16"
              />
            </div>
            <h5 className="text-lg font-semibold text-center mb-2">Futures & Options</h5>
            <p className="text-gray-600 text-md sm:text-sm text-center">
              No.1 advisory services in bank nifty futures and options. Trade with minimum capital and earn big returns from the option market.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://growmorecapitals.com/wp-content/uploads/2025/06/monitor.png"
                alt="Swing Trading"
                className="w-16 h-16"
              />
            </div>
            <h5 className="text-lg font-semibold text-center mb-2">Swing Trading</h5>
            <p className="text-gray-600 text-md sm:text-sm text-center">
              With the right F&O tips, you will be able to grow your investments easily. Futures and options are a great way to increase your money.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://growmorecapitals.com/wp-content/uploads/2025/06/XAUUSD-2.png"
                alt="Forex Trading Research"
                className="w-16 h-16"
              />
            </div>
            <h5 className="text-lg font-semibold text-center mb-2">Forex Trading Research</h5>
            <p className="text-gray-600 text-md sm:text-sm text-center">
              Forex Trading Research analyzes market trends, economic data, and indicators to guide currency trading decisions and improve profitability and strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
