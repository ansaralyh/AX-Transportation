import React from "react";

const CDLDriverApplicationForm: React.FC = () => {
  return (
    <div className="w-full">
      {/* Full-width Black Header */}
      <header className="w-full bg-black text-white p-4 flex items-center">
        <div className="container mx-auto flex items-center">
          {/* Logo placeholder */}
          <div className="mr-4">
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold">AX Transportation</h1>
            <p className="text-sm">Professional CDL Drivers</p>
          </div>
        </div>
      </header>

      {/* Application Form */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-md rounded-lg mt-6 mb-6 w-full">
        <div className="w-full flex flex-col gap-4">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">
              CDL Driver Application Form
            </h2>
            <p className="text-sm text-gray-600 mb-1">AX Transportation</p>
            <p className="text-sm text-gray-600 mb-4">
              Fill out the form to apply for a driver position.
            </p>

            {/* Applicant Information */}
            <h2 className="text-xl font-bold mb-4">Applicant Information</h2>
            <div className="mb-4">
              <input
                className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                placeholder="Full Name"
              />
              <input
                className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                placeholder="Date of Birth"
              />
              <input
                className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
                placeholder="Phone Number"
              />

              <div className="mb-4">
                <input
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Email Address"
                />
                <p className="text-xs text-red-500 mt-1">
                  Please enter valid email address
                </p>
              </div>

              <p className="text-sm mb-1">Current Address:</p>
              <input
                className="w-full p-2 border-b border-gray-300 mb-4 outline-none"
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
            </div>

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
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
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

            <h2 className="text-xl font-bold mb-4">
              Employment History (Last 3 Employers)
            </h2>

            {/* Employer 1 */}
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

            <h2 className="text-xl font-bold mb-4">Upload Documents</h2>
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
            {/* Resume */}
            <h3 className="text-lg font-semibold mb-2">
              Upload National ID or Passport
            </h3>
            <div className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center">
              <button className="text-gray-500 flex items-center text-sm">
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
                <span>Upload National ID or Passport</span>
              </button>
            </div>
            {/* Recent Photograph */}
            <h3 className="text-lg font-semibold mb-2">
              Upload Recent Photograph
            </h3>
            <div className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center">
              <button className="text-gray-500 flex items-center text-sm">
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
                <span>Upload Recent Photograph</span>
              </button>
            </div>

            {/* Recent Medical Fitness Certificate */}
            <h3 className="text-lg font-semibold mb-2">
              Upload Medical Fitness Certificate
            </h3>
            <div className="border border-dashed border-gray-300 p-4 mb-6 rounded flex justify-center items-center">
              <button className="text-gray-500 flex items-center text-sm">
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
                <span>Upload Medical Fitness Certificate</span>
              </button>
            </div>

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

            <button className="w-full bg-orange-500 text-white p-2 rounded mb-4">
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

export default CDLDriverApplicationForm;
