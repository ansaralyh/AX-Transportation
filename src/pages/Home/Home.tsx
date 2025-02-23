import Header from "../../components/Header/Header"

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#282121,#000000)] min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="container mx-auto px-36 mt-[70px]">
        <div className="flex justify-between items-start">
          {/* Left Column */}
          <div className="w-1/2">
            <h1 className="text-[48px] text-[#FFFFFF] leading-tight font-prosto-one">
              AX Transportation – Your <br /> Trusted Partner in Freight & <br /> Fueling Solutions
            </h1>
            <p className="text-[#FFFFFF] mt-4 font-[700]">
              AX Transportation – Your Trusted <br /> Partner in Freight & Fueling Solutions
            </p>
            <p className="text-[#FFFFFF] mt-6 leading-[28px]">
              Welcome to AX Transportation, where we offer comprehensive transportation <br />
              and fueling services to meet your needs—24 hours a day, 365 days a year. <br />
              Whether you require dry goods and food delivery or heavy-duty construction <br />
              equipment transport, we have the fleet and expertise to get it done. Our mobile <br />
              fueling division ensures your job sites stay powered with both clear and red <br />
              diesel and unleaded fuel. Let us help keep your business moving!
            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-8">
              <button className="rounded-md border-2 border-[#FB8A00] bg-transparent px-6 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-[#FB8A00]">
                Get Started
              </button>
              <button className="rounded-md border-2 border-[#FB8A00] bg-[#FB8A00] px-6 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-transparent">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex justify-end">
            <img src="/assets/shipping 1.png" alt="Shipping illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      {/* Section-two */}
      <div className="bg-black w-full h-[20vh] border-2"></div>
    </div>
  )
}

export default Home

