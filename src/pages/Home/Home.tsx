import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#282121,#000000)] min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 mt-8 sm:mt-12 md:mt-16 lg:mt-[70px]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#FFFFFF] leading-tight font-prosto-one text-center lg:text-left">
              AX Transportation – Your Trusted Partner in Freight & Fueling
              Solutions
            </h1>
            <p className="text-[#FFFFFF] mt-4 font-[700] text-center lg:text-left">
              AX Transportation – Your Trusted Partner in Freight & Fueling
              Solutions
            </p>
            <p className="text-[#FFFFFF] mt-6 leading-[28px] text-sm sm:text-base text-center lg:text-left">
              Welcome to AX Transportation, where we offer comprehensive
              transportation and fueling services to meet your needs—24 hours a
              day, 365 days a year. Whether you require dry goods and food
              delivery or heavy-duty construction equipment transport, we have
              the fleet and expertise to get it done. Our mobile fueling
              division ensures your job sites stay powered with both clear and
              red diesel and unleaded fuel. Let us help keep your business
              moving!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto rounded-md border-2 border-[#FB8A00] bg-transparent px-6 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-[#FB8A00]">
                Get Started
              </button>
              <button className="w-full sm:w-auto rounded-md border-2 border-[#FB8A00] bg-[#FB8A00] px-6 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-transparent">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/assets/shipping 1.png"
              alt="Shipping illustration"
              className="max-w-full h-auto ]"
            />
          </div>
        </div>
      </div>
      {/* Section-two */}
      <div className="bg-white w-full mt-20 relative pb-24 md:pb-32 lg:pb-40 ">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1003px] bg-black rounded border-2 py-8 px-4 top-[40px] border-2 border-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FB8A00]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">1000+</h3>
                <p className="text-gray-400">User</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FB8A00]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">100</h3>
                <p className="text-gray-400">Satisficed</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FB8A00]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">100%</h3>
                <p className="text-gray-400">Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-three */}
      <div className="bg-[#D9D9D938] h-[738px]"></div>
    </div>
  );
};

export default Home;
