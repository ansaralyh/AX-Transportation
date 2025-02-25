import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Header from "../../components/Header/Header";
// import './App.css'

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
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="bg-white w-full mt-20 py-20">
        {/* Black Box Container */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
          {/* Black Box */}
          <div className="bg-black rounded-lg border-2 border-white py-8 px-6 sm:px-8 md:px-12 lg:px-16">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* User Count */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#FB8A00]"
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
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  1000+
                </h3>
                <p className="text-gray-400 text-lg">User</p>
              </div>

              {/* Satisfaction Count */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#FB8A00]"
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
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  100
                </h3>
                <p className="text-gray-400 text-lg">Satisfied</p>
              </div>

              {/* Security Count */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#FB8A00]"
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
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  100%
                </h3>
                <p className="text-gray-400 text-lg">Security</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:mb:8 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/10740605 1.png"
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
            <div className="relative bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg">
              {/* Fuel Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/fuel-pump-location-3d-icon-download-in-png-blend-fbx-gltf-file-formats--petrol-station-gas-pack-maps-and-navigation-icons-5740237 1.png"
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
            <div className="relative bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
              {/* 24/7 Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/9531254 1.png"
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
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
          <div className="flex flex-col lg:flex-row justify-between items-center relative">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 bg-[#F7F7F7] px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 rounded-lg">
              <h3 className="text-[20px] sm:text-[24px] font-normal uppercase tracking-wide">
                Our Equipment & What We Haul
              </h3>
              <h2 className="text-[36px] sm:text-[48px] font-normal leading-tight mt-2">
                State-of-the-Art Fleet & Diverse Freight Options
              </h2>
              <p className="text-[18px] sm:text-[24px] text-[#000000] mt-4">
                With a versatile fleet, AX Transportation ensures your goods
                arrive safely, securely, and on time.
              </p>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src="/assets/Ellipse 2804 (1).png"
                    alt=""
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <div>
                    <h4 className="font-bold text-[20px] sm:text-[24px]">
                      Dry Van
                    </h4>
                    <p className="text-black text-[14px] sm:text-[16px]">
                      Perfect for transporting dry goods, food, and other
                      non-perishable items. Our dry vans are equipped to handle
                      various freight sizes and ensure your cargo stays safe and
                      secure.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src="/assets/Ellipse 2804 (1).png"
                    alt=""
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <div>
                    <h4 className="font-bold text-[20px] sm:text-[24px]">
                      Heavy Equipment Hauling
                    </h4>
                    <p className="text-black text-[14px] sm:text-[16px]">
                      We handle construction and industrial equipment such as
                      scissor lifts, forklifts, boom lifts, and steel, providing
                      the right equipment to safely transport your machinery.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src="/assets/Ellipse 2804 (1).png"
                    alt=""
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <div>
                    <h4 className="font-bold text-[20px] sm:text-[24px]">
                      Reefer Trailers
                    </h4>
                    <p className="text-black text-[14px] sm:text-[16px]">
                      Designed to transport perishable items at controlled
                      temperatures, ensuring your temperature-sensitive goods
                      arrive in pristine condition.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src="/assets/Ellipse 2804 (1).png"
                    alt=""
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <div>
                    <h4 className="font-bold text-[20px] sm:text-[24px]">
                      Mobile Fueling Tankers
                    </h4>
                    <p className="text-black text-[14px] sm:text-[16px]">
                      Our mobile fueling trucks ensure your remote job sites
                      stay powered, with delivery of clear diesel, red diesel,
                      and unleaded fuel right to where you need it.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            {/* Visible on larger screens (lg and above) */}
            <div className="hidden lg:block absolute left-[630px]">
              <img
                src="/assets/truck.jpg"
                alt="Fleet and Freight Options"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Visible on smaller screens (below lg) */}
            <div className="w-full lg:hidden mt-8">
              <img
                src="/assets/truck.jpg"
                alt="Fleet and Freight Options"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section-5 */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="relative bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg mt-[40px]">
              {/* Truck Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/4323784 1.png"
                  alt="Truck Icon"
                  className="w-14 h-14"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">
                  Real-Time GPS <br /> Tracking
                </h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  Monitor your fleet with precision.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg">
              {/* Fuel Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/3931551 1.png"
                  alt="Fuel Icon"
                  className="w-20 h-20"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">
                  Driver Performance <br />
                </h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  Track and improve driver efficiency.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg  mt-[40px]">
              {/* Warning Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/warning-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alert-error-danger-sign-notification-pack-network-communication-icons-5220289 1.png"
                  alt="24/7 Icon"
                  className="w-17 h-17"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">
                  Driver Performance <br />
                </h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  Track and improve driver efficiency.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>

            {/* Card 4 */}
            <div className="relative bg-[#1B1717] h-[301px] text-white p-6 rounded-2xl shadow-lg">
              {/* Evaluation Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img
                  src="/assets/evaluation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--assessment-analysis-customer-survey-service-business-pack-ethics-laws-icons-6704058 1.png"
                  alt="24/7 Icon"
                  className="w-17 h-17"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold text-center">
                  Driver Performance <br />
                </h2>
                <p className="text-[15px] mt-2 leading-[22.5px]">
                  Track and improve driver efficiency.
                </p>
              </div>

              {/* Bottom Yellow Portion Under the Card */}
              <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-6 */}
      <div className="bg-white py-20">
        {/* Text Section */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 text-center mb-12">
          <h3 className="text-[20px] font-normal uppercase tracking-wide text-[#000000]">
            Employment Opportunities
          </h3>
          <h2 className="text-[48px] font-normal leading-tight mt-2 text-[#000000]">
            Join Our Team at AX Transportation
          </h2>
          <p className="text-[23px] text-center mt-4 text-[#000000]">
            We're always looking for motivated individuals to help drive our{" "}
            <br /> success.
          </p>
          <p className="text-[20px] text-[#000000] text-center">
            At AX Transportation, we believe in the power of teamwork and are
            looking for <br /> dedicated professionals to join our team.
          </p>
        </div>

        {/* Job Openings Section - Full Width Black Background */}
        <div className="w-full bg-black py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
            <h3 className="text-white text-[32px] text-center mb-8">
              Current Openings
            </h3>
            {/* Jobs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Job 1 */}
              <div className="bg-white h-[190px] w-full flex flex-col font-bold items-center justify-center  shadow-lg">
                <img
                  src="/assets/equipment-service-technician-line-icon-illustration-vector 1.png"
                  alt=""
                  className="h-[90px] w-[90px]"
                />
                <p className="text-[24px] text-[#000000] text-center mt-4">
                  Class A CDL <br /> Drivers
                </p>
              </div>
              {/* Job 2 */}
              <div className="bg-white h-[190px] w-full flex flex-col font-bold items-center justify-center  shadow-lg">
                <img
                  src="/assets/2459586-200 1.png"
                  alt=""
                  className="h-[100px] w-[100px]"
                />
                <p className="text-[24px] text-[#000000] text-center mt-4">
                  Fuel Delivery <br /> Technicians
                </p>
              </div>
              {/* Job 3 */}
              <div className="bg-white h-[190px] w-full flex flex-col font-bold items-center justify-center  shadow-lg">
                <img
                  src="/assets/equipment-service-technician-line-icon-illustration-vector 1.png"
                  alt=""
                  className="h-[90px] w-[90px]"
                />
                <p className="text-[24px] text-[#000000] text-center mt-4">
                  Dispatch & <br /> Operations Staff
                </p>
              </div>
              {/* Job 4 */}
              <div className="bg-white h-[190px] w-full flex flex-col font-bold items-center justify-center shadow-lg ">
                <img
                  src="/assets/istockphoto-1211333525-612x612 1.png"
                  alt=""
                  className="h-[90px] w-[90px]"
                />
                <p className="text-[24px] text-[#000000] text-center mt-4">
                  Maintenance <br /> Technicians
                </p>
              </div>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 text-center mt-12">
            <button className="rounded-md w-[254px] bg-[#FB8A00] px-8 py-3 text-[18px] font-medium text-white transition-colors duration-200 hover:bg-[#E67A00]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Section-7 */}
      <div className="bg-white py-20">
        {/* Job Openings Section - Full Width Black Background */}
        <div className="w-full bg-[#FB8A00] ">
          <div className="container mx-auto  px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
            <h3 className="text-white text-[32px] text-center mb-8">
              Why Work with Us
            </h3>
            {/* Jobs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Job 1 */}
              <div className="bg-black h-[190px] w-full flex flex-col font-bold items-center justify-center  shadow-lg">
                <img
                  src="/assets/1240401 1.png"
                  alt=""
                  className="h-[90px] w-[90px]"
                />
                <p className="text-[24px] text-[#FFF] text-center mt-4">
                  Competitive <br /> wages
                </p>
              </div>
              {/* Job 2 */}
              <div className="bg-black h-[190px] w-full flex flex-col font-bold items-center justify-center shadow-lg">
                <img
                  src="/assets/4859642 1.png"
                  alt=""
                  className="h-[100px] w-[100px]"
                />
                <p className="text-[24px] text-[#FFF] text-center mt-4">
                  Flexible <br /> schedules
                </p>
              </div>
              {/* Job 3 */}
              <div className="bg-black h-[190px] w-full flex flex-col font-bold items-center justify-center  shadow-lg">
                <img
                  src="/assets/16648620 1.png"
                  alt=""
                  className="h-[90px] w-[90px]"
                />
                <p className="text-[24px] text-[#FFF] text-center mt-4">
                  Opportunities for <br /> career growth
                </p>
              </div>
              {/* Job 4 */}
              <div className="bg-black h-[190px] w-full flex flex-col font-bold items-center justify-center  shadow-lg">
                <img
                  src="/assets/2966327 1.png"
                  alt=""
                  className="h-[90px] w-[90px]"
                />
                <p className="text-[24px] text-[#FFF] text-center mt-4">
                  Health benefits <br /> and more
                </p>
              </div>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="container  mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 text-center mt-12">
            <button className="rounded-md mb-8 w-[254px] bg-black px-8 py-3 text-[18px] font-medium text-white transition-colors duration-200 ">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Section-8 */}

      <div className="bg-white py-20 flex flex-col lg:flex-row justify-center items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
        {/* Left Text Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[20px] sm:text-[24px] text-[#000000] font-normal mb-6">
            Mobile California CARB Inspections
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#000000] font-normal mb-6">
            Mobile California CARB <br className="hidden lg:block" /> Inspection
            Services
          </h1>
          <p className="text-[#000000] font-normal text-lg sm:text-xl lg:text-[24px] mb-6">
            "Ensure Your Equipment Meets California’s Strict{" "}
            <br className="hidden lg:block" /> Emissions Standards with Our
            Convenient Mobile <br className="hidden lg:block" /> Service.
          </p>
          <div className="flex justify-center">
  <button className="bg-[#FB8A00] w-[300px] md:w-[400px] lg:w-[562px] h-[60px] md:h-[70px] lg:h-[84px] rounded-lg text-[16px] md:text-[20px] lg:text-[24px] text-white hidden sm:block">
    Schedule Your Mobile Inspection Now
  </button>
</div>
        </div>

        {/* Right Cards Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="w-full h-[161px] border-gray-300 flex justify-center items-center text-lg sm:text-[24px] font-semibold text-gray-700 bg-white rounded-lg shadow-2xl">
            Mobile Inspection Price: $175.00 per vehicle
          </div>
          <div className="w-full h-[161px] border-gray-300 flex justify-center items-center text-lg sm:text-[24px] font-semibold text-gray-700 bg-white rounded-lg shadow-2xl">
            Mobile Inspection Price: $175.00 per vehicle
          </div>
          <div className="w-full h-[161px] border-gray-300 flex justify-center items-center text-lg sm:text-[24px] font-semibold text-gray-700 bg-white rounded-lg shadow-2xl">
            Mobile Inspection Price: $175.00 per vehicle
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#282121] text-white p-8">
  <div className="footer container mx-auto flex flex-col md:flex-row justify-between items-start">
    {/* Logo Section */}
    <div className="relative w-[150px] sm:w-[200px] h-[250px] flex items-center mb-8 md:mb-0">
  {/* White Radial Gradient Background */}
  <div className="absolute w-[250px] sm:w-[300px] h-full top-[-30px] left-[-98px] sm:left-[-220px] bg-[radial-gradient(circle,_#ffffff_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)] logo" />

  {/* Logo Image */}
  <img
    src="/assets/image 54.png"
    alt="AXT Transportation Logo"
    className="relative left-[-26px] sm:left-[-150px] top-[-30px] z-10 w-[120px] sm:w-[150px] h-auto"
  />
</div>

    {/* Left Section - Services */}
    <div className="w-full md:w-1/3 mt-7 mb-8 md:mb-0">
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2">
        <li>Reel-Time Tracking</li>
        <li>Driver Profiles</li>
        <li>Maintenance</li>
        <li>Reports</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Right Section - Corporate */}
    <div className="w-full md:w-1/3 mt-7 mb-8 md:mb-0">
      <h3 className="text-lg font-semibold mb-4">Corporate</h3>
      <ul className="space-y-2">
        <li>Contact Us</li>
        <li>1722 W. Bonanza Rd.</li>
        <li>Las Vegas, NV 89106, USA</li>
        <li>1-702-478-1860</li>
        <li>General Inquiry: info@axtransportation.com</li>
        <li>Load Inquiry: load@axtransportation.com</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/3 mt-7 mb-8 md:mb-0">
      <img
        className="w-full max-w-[382px] h-auto"
        src="/assets/footerimg.png"
        alt="Footer Image"
      />
    </div>
  </div>

</footer>
      <div className="border-t border-gray-800 bg-[#FB8A00] h-[60px] flex items-center justify-around text-center">
        <p className="text-sm text-[#fff]">
          &copy; {new Date().getFullYear()} AX Transportation. All rights
          reserved.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Facebook />
          </div>
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Instagram />
          </div>
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Twitter />
          </div>
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
