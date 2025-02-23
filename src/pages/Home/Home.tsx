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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                  1000+
                </h3>
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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                  100
                </h3>
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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                  100%
                </h3>
                <p className="text-gray-400">Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-three */}
      <div className="bg-[#F7F7F7] py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
          {/* Text Section */}
          <div className="text-center mb-12">
            <h3 className="text-[20px] font-normal uppercase tracking-wide">
              What We Do
            </h3>
            <h2 className="text-[48px] font-normal leading-tight mt-2">
              Comprehensive Freight Hauling <br /> & Mobile Fueling Services
            </h2>
            <p className="text-[34px] text-gray-600 mt-4">
              At AX Transportation, we offer a full range of hauling <br />
              and fueling services tailored to your needs.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex gap-[80px] justify-center">
            {/* Card 1 */}
            <div className="relative w-80 bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/10740605 1.png"
                  alt="Truck Icon"
                  className="w-14 h-14"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold">
                  Freight <br /> Hauling
                </h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  We specialize in transporting all calibers of freight, from
                  dry goods and food to industrial machinery like scissor lifts,
                  forklifts, boom lifts, and steel. No job is too big or small
                  for our experienced team.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 2 */}
            <div className="relative w-80 bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/fuel-pump-location-3d-icon-download-in-png-blend-fbx-gltf-file-formats--petrol-station-gas-pack-maps-and-navigation-icons-5740237 1.png"
                  alt="Fuel Icon"
                  className="w-20 h-20"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold">Mobile Fueling</h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  AX Transportation’s Mobile Fuel Division offers on-site
                  fueling services, delivering clear diesel, red diesel (dyed),
                  and unleaded fuels to remote job sites and locations.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 3 */}
            <div className="relative w-80 bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/9531254 1.png"
                  alt="24/7 Icon"
                  className="w-20 h-20"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold">24/7 Availability</h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  We operate 24 hours a day, 7 days a week, ensuring your
                  freight and fueling needs are met on time—no matter when or
                  where you need us.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="bg-white py-10 ">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 ">
          <div className="flex flex-col lg:flex-row justify-between items-center relative ">
            {/* Left Column - Text Content */}
            <div className="  h-[872px] w-[800px] mb-8 lg:mb-0 bg-[#F7F7F7] px-10">
              <h3 className="text-[24px] font-normal uppercase tracking-wide mt-[79px]">
                Our Equipment & What We Haul
              </h3>
              <h2 className="text-[48px] font-normal leading-tight mt-2">
                State-of-the-Art Fleet & Diverse Freight Options
              </h2>
              <p className="text-[24px] text-[#000000] mt-4">
                With a versatile fleet, AX Transportation ensures your goods
                arrive safely, securely, and on time.
              </p>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-5">
                  {/* <span className="text-[#FB8A00] text-[60px] mr-3">&#8226;</span> */}
                  <img src="/public/assets/Ellipse 2804 (1).png" alt="" />
                  <div>
                    <h4 className="font-bold text-[24px]">Dry Van</h4>
                    <p className="text-black">
                    Perfect for transporting dry goods, food, and other non-perishable items. Our dry vans <br /> are equipped to handle various freight sizes and ensure your cargo stays safe and secure
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                <img src="/public/assets/Ellipse 2804 (1).png" alt="" />
                  <div>
                    <h4 className="font-bold text-[24px]">
                      Heavy Equipment Hauling
                    </h4>
                    <p className="text-black">
                    We handle construction and industrial equipment such as scissor lifts, forklifts, boom <br />lifts, and steel, providing the right equipment to safely transport your machinery.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                <img src="/public/assets/Ellipse 2804 (1).png" alt="" />
                  <div>
                    <h4 className="font-bold text-[24px]">Reefer Trailers</h4>
                    <p className="text-black">
                    Designed to transport perishable items at controlled temperatures, ensuring your <br /> temperature-sensitive goods arrive in pristine condition
                    </p>
                  </div>
                </li>
                <li className="flex  items-center gap-5">
                <img src="/public/assets/Ellipse 2804 (1).png" alt="" />
                  <div>
                    <h4 className="font-bold text-[24px]">
                      Mobile Fueling Tankers
                    </h4>
                    <p className="text-black">
                    Our mobile fueling trucks ensure your remote job sites stay powered, with delivery of <br /> clear diesel, red diesel, and unleaded fuel right to where you need it.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end absolute left-[750px]">
              <img
                src="/public/assets/Rectangle 34625717.png"
                alt="Fleet and Freight Options"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section-5 */}

      <div className="bg-[#F7F7F7] py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
          {/* Text Section */}
          <div className="text-center mb-12">
            <h3 className="text-[20px] font-normal uppercase tracking-wide">
            Why Choose AX Transportation?
            </h3>
            <h2 className="text-[48px] font-normal leading-tight mt-2">
            Why Partner with AX <br /> Transportation
            </h2>
          
          </div>

          {/* Cards Section */}
          <div className="flex gap-[80px] justify-center">
            {/* Card 1 */}
            <div className="relative w-80 bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/4323784 1.png"
                  alt="Truck Icon"
                  className="w-14 h-14"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">
                Real-Time GPS <br />Tracking
                </h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                Monitor your fleet with precision.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 2 */}
            <div className="relative w-80 bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/3931551 1.png"
                  alt="Fuel Icon"
                  className="w-20 h-20"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">Driver Performance <br /></h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                "Track and improve driver efficiency."
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 3 */}
            <div className="relative w-80 bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/warning-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alert-error-danger-sign-notification-pack-network-communication-icons-5220289 1.png"
                  alt="24/7 Icon"
                  className="w-17 h-17"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">Driver Performance <br /></h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                "Track and improve driver efficiency."
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>
            {/* Card 3 */}
            <div className="relative w-80 bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg ">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/public/assets/evaluation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--assessment-analysis-customer-survey-service-business-pack-ethics-laws-icons-6704058 1.png"
                  alt="24/7 Icon"
                  className="w-17 h-17"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">Driver Performance <br /></h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                "Track and improve driver efficiency."
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
