

const DriverForm = () => {
  return (
    <div className="bg-black h-[132px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
        <div className="relative w-[150px] sm:w-[200px] h-[250px] flex items-center mb-8 md:mb-0">
          {/* White Radial Gradient Background */}
          <div className="absolute w-[250px] sm:w-[300px] h-full top-[-30px] left-[-98px] sm:left-[-220px] bg-[radial-gradient(circle,_#ffffff_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)] logo" />

          {/* Logo Image */}
          <img
            src="/assets/image 54.png"
            alt="AXT Transportation Logo"
            className="relative left-[-26px] sm:left-[-150px] top-[-45px] z-10 w-[120px] sm:w-[150px] h-auto"
          />
        </div>
        {/* Application Form */}
        <div className=" flex flex-wrap gap-10">
          {/* Form content left */}
          <div className=" flex-1">
            <h2 className="text-[44px] font-bold mb-4">
              Driver Application Form
            </h2>
            <p className="text-[15px] text-[#737B7D] mb-[80px]">
              Need an experienced and skilled hand with custom IT projects?
              <br />
              Fill out the form to get a free consultation.
            </p>
            {/* Applicant Information */}
            <h2 className="text-xl font-bold mb-4">Applicant Information</h2>
            <div className="mb-4">
              <input
                className="w-full p-2 border-b border-gray-300 mb-14 outline-none"
                placeholder="Full Name"
              />
              <input
                className="w-full p-2 border-b border-gray-300 mb-14 outline-none"
                placeholder="Date of Birth"
              />
              <input
                className="w-full p-2 border-b border-gray-300 mb-14 outline-none"
                placeholder="Phone Number"
              />
              <div className="mb-8">
                <input
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Email Address"
                />
              </div>
              <p className="text-sm mb-4 font-bold">Current Address:</p>
              <input
                className="w-full p-2 border-b border-gray-300 mb-14 outline-none"
                placeholder="Street"
              />
              <div className="flex gap-4 mb-4">
                <input
                  className="flex-1 p-2 border-b border-gray-300 outline-none"
                  placeholder="City"
                />
                <input
                  className="w-16 p-2 border-b border-gray-300 outline-none"
                  placeholder="State"
                />
                <input
                  className="w-24 p-2 border-b border-gray-300 outline-none"
                  placeholder="Zip"
                />
              </div>
              <p className="mb-2">
                Are you legally authorized to work in the U.S.?
              </p>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center cursor-pointer">
                  <span className="w-4 h-4 rounded-full bg-orange-500 inline-block mr-2"></span>
                  Yes
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="work_auth" className="hidden" />
                  <span className="w-4 h-4 rounded-full border border-gray-300 inline-block mr-2"></span>
                  No
                </label>
              </div>
              <p className="mb-2">Have you ever been convicted of a felony?</p>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center cursor-pointer">
                  <span className="w-4 h-4 rounded-full bg-orange-500 inline-block mr-2"></span>
                  Yes
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="felony" className="hidden" />
                  <span className="w-4 h-4 rounded-full border border-gray-300 inline-block mr-2"></span>
                  No
                </label>
              </div>
              <textarea
                className="w-full bg-gray-100 p-2 mb-4 border-b border-gray-300 outline-none rounded-none"
                rows={2}
                placeholder="Explanation (if yes)"
              ></textarea>
              {/* CDL Information */}
              <h2 className="text-xl font-bold mb-4">CDL Information</h2>
              <div className="mb-4">
                <input
                  className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                  placeholder="CDL License Number"
                />
                <div className="flex gap-4 mb-4">
                  <input
                    className="w-24 p-2 border-b border-gray-300 outline-none"
                    placeholder="State Issued"
                  />
                  <input
                    className="flex-1 p-2 border-b border-gray-300 outline-none"
                    placeholder="Expiration Date"
                  />
                </div>

                <p className="mb-2">Endorsements:</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2" />
                    <span>Tanker</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2" />
                    <span>Hazmat</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2" />
                    <span>Doubles/Triples</span>
                  </label>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <input
                      className="p-1 border-b border-gray-300 w-32 outline-none"
                      placeholder="Other"
                    />
                  </div>
                </div>

                <input
                  className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                  placeholder="Years of CDL Experience"
                />
                {/* Employer 1 */}
              </div>{" "}
              <h2 className="text-xl font-bold mb-4">
                Employment History (Last 3 Employers)
              </h2>
              <p className="font-semibold">1. Previous Employer</p>
              <input
                className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
                placeholder="Company Name"
              />
              <input
                className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
                placeholder="Position Held"
              />
              <div className="flex gap-4 mb-2">
                <input
                  className="flex-1 p-2 border-b border-gray-300 outline-none"
                  placeholder="From (Date)"
                />
                <input
                  className="flex-1 p-2 border-b border-gray-300 outline-none"
                  placeholder="To (Date)"
                />
              </div>
              <input
                className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                placeholder="Reason for Leaving"
              />
              {/* Employer 2 */}
              <p className="font-semibold">2. Previous Employer</p>
              <input
                className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
                placeholder="Company Name"
              />
              <input
                className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
                placeholder="Position Held"
              />
              <div className="flex gap-4 mb-2">
                <input
                  className="flex-1 p-2 border-b border-gray-300 outline-none"
                  placeholder="From (Date)"
                />
                <input
                  className="flex-1 p-2 border-b border-gray-300 outline-none"
                  placeholder="To (Date)"
                />
              </div>
              <input
                className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                placeholder="Reason for Leaving"
              />
            </div>
          </div>
          
          {/* Form content right */}
          <div className="flex-1">
            {/* Employer 3 */}
            <p className="font-semibold">3. Previous Employer</p>
            <input
              className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
              placeholder="Company Name"
            />
            <input
              className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
              placeholder="Position Held"
            />
            <div className="flex gap-4 mb-2">
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="From (Date)"
              />
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="To (Date)"
              />
            </div>
            <input
              className="w-full p-2 border-b border-gray-300 mb-6 outline-none"
              placeholder="Reason for Leaving"
            />
            <h2 className="text-xl font-bold mb-4">Driving History</h2>

            <p className="mb-2">
              Have you had any accidents in the past 3 years?
            </p>
            <div className="flex gap-4 mb-2">
              <label className="flex items-center cursor-pointer">
                <span className="w-4 h-4 rounded-full bg-orange-500 inline-block mr-2"></span>
                Yes
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="accidents" className="hidden" />
                <span className="w-4 h-4 rounded-full border border-gray-300 inline-block mr-2"></span>
                No
              </label>
            </div>
            <textarea
              className="w-full bg-gray-100 p-2 mb-4 border-b border-gray-300 outline-none rounded-none"
              rows={2}
              placeholder="If yes, provide details"
            ></textarea>

            <p className="mb-2">
              Have you had any moving violations in the past 3 years?
            </p>
            <div className="flex gap-4 mb-2">
              <label className="flex items-center cursor-pointer">
                <span className="w-4 h-4 rounded-full bg-orange-500 inline-block mr-2"></span>
                Yes
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="violations" className="hidden" />
                <span className="w-4 h-4 rounded-full border border-gray-300 inline-block mr-2"></span>
                No
              </label>
            </div>
            <textarea
              className="w-full bg-gray-100 p-2 mb-4 border-b border-gray-300 outline-none rounded-none"
              rows={2}
              placeholder="If yes, provide details"
            ></textarea>
            <h2 className="text-xl font-bold mb-4">References</h2>

            {/* Reference 1 */}
            <div className="flex gap-4 mb-4">
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Name"
              />
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Relationship"
              />
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Phone Number"
              />
            </div>

            {/* Reference 2 */}
            <div className="flex gap-4 mb-6">
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Name"
              />
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Relationship"
              />
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Phone Number"
              />
            </div>

            <h2 className="text-[44px] font-bold mb-4">Upload Documents</h2>
            {/* Driver’s License Copy */}
            <h3 className="text-lg font-semibold mb-2">
              Upload Driver’s License Copy
            </h3>
            <label className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center cursor-pointer">
              <input type="file" className="hidden" />
              <span className="text-gray-500 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                  />
                </svg>
                <span>Click to Upload</span>
              </span>
            </label>
            {/* National ID or Passport Copy */}
            <h3 className="text-lg font-semibold mb-2">
            National ID or Passport Copy
            </h3>
            <label className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center cursor-pointer">
              <input type="file" className="hidden" />
              <span className="text-gray-500 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                  />
                </svg>
                <span>Click to Upload</span>
              </span>
            </label>
            
            {/* Recent photograph Copy */}
            <h3 className="text-lg font-semibold mb-2">
            Recent photograph Copy
            </h3>
            <label className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center cursor-pointer">
              <input type="file" className="hidden" />
              <span className="text-gray-500 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                  />
                </svg>
                <span>Click to Upload</span>
              </span>
            </label>
            {/* Medical Fitness Certificate Copy */}
            <h3 className="text-lg font-semibold mb-2">
            Medical Fitness Certificate Copy
            </h3>
            <label className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center cursor-pointer">
              <input type="file" className="hidden" />
              <span className="text-gray-500 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                  />
                </svg>
                <span>Click to Upload</span>
              </span>
            </label>
            
            <button className="w-full h-[54px] bg-orange-500 text-white p-2  mb-4">
              SUBMIT
            </button>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Consent & Agreement
              <span className="text-red-500 ml-1">*</span>
            </h3>
            <p className="text-sm mb-4">
              I certify that the information provided is true and complete. I
              authorize AX Transportation to conduct background checks,
              including employment history, driving records, and criminal
              records. I understand that false or misleading information may
              disqualify me from employment.
            </p>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <p>I agree to the terms and conditions</p>
            </div>

            <div className="flex gap-4 mb-6">
              <input
                className="flex-1 p-2 border-b border-gray-300 outline-none"
                placeholder="Signature"
              />
              <input
                className="w-32 p-2 border-b border-gray-300 outline-none"
                placeholder="Date"
              />
            </div>
            <button className="w-full h-[54px] bg-orange-500 text-white p-2  mb-4">
              SUBMIT APPLICATION
            </button>

            <div className="border-t border-gray-300 pt-4 text-xs text-gray-500">
              <p className="font-semibold">For Office Use Only</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" />
                  <span>Application Reviewed</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" />
                  <span>Background Check Completed</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" />
                  <span>Interview Scheduled</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" />
                  <span>Hired</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" />
                  <span>Not Hired</span>
                </label>
              </div>
              <textarea
                className="w-full bg-gray-100 p-2 mt-2 border-b border-gray-300 outline-none rounded-none"
                rows={1}
                placeholder="Comments"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverForm;