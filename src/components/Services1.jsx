import React, { useEffect } from "react";

const Services1 = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <div className="py-2 bg-gray-100 font-publicSans py-20 px-0 sm:px-8 sm:py-10 sm:mt-[calc(var(--header-height,40px))] mt-[calc(var(--header-height,20px))]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-2xl font-semibold text-gray-600">Services We Offer</h6>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-2">Our Stock Market Research</h2>
          <p className="text-gray-600 text-md font-medium mt-4">
            We provide high-quality & accurate calls in the stock market. Our stock market experts offer the best tips and strategies for market investments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Intraday Service */}
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
              Our Intraday calls are based on in-depth technical analysis, helping traders make quick, profitable decisions in the stock market.
            </p>
          </div>

          {/* Futures & Options Service */}
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
              We offer expert advisory services in stock market futures and options, guiding you to trade efficiently with high returns.
            </p>
          </div>

          {/* Swing Trading Service */}
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
              Swing trading strategies in the stock market, focusing on medium-term price moves and ensuring consistent growth of your investments.
            </p>
          </div>

          {/* Stock Market Research Service */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://growmorecapitals.com/wp-content/uploads/2025/06/XAUUSD-2.png"
                alt="Stock Market Research"
                className="w-16 h-16"
              />
            </div>
            <h5 className="text-lg font-semibold text-center mb-2">Stock Market Research</h5>
            <p className="text-gray-600 text-md sm:text-sm text-center">
              We provide detailed stock market research, using advanced tools and data analytics to guide your trading decisions and strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
