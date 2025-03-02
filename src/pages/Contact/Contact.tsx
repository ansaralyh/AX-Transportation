"use client"

import type React from "react"
import { useState } from "react"
import { MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your inquiry. Our team will get back to you within 24 hours.")
  }

  return (
    <div className="bg-white p-6 max-w-[1082px] mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Get in Touch – We're Here to Help
        </h1>
        <p className="text-gray-600 mt-2">
          Have questions about our services, need a quote, or want to discuss business opportunities? Contact AX
          Transportation today!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* First Business Contact Details Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-red-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">Business Contact Details</h2>
          </div>
          <p className="text-gray-600 mb-5 text-lg">
            Fill out the form below, and our team will get back to you within 24 hours
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-base font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>
          </div>
        </div>

        {/* Second Business Contact Details Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-red-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">Business Contact Details</h2>
          </div>
          <p className="text-gray-600 mb-5 text-lg">Select Inquiry Type</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <input
                type="radio"
                id="freight"
                name="inquiryType"
                className="peer sr-only"
                onChange={() => handleRadioChange("Freight Hauling Services")}
                checked={formData.inquiryType === "Freight Hauling Services"}
              />
              <label
                htmlFor="freight"
                className="flex items-center justify-center p-3 bg-gray-100 border border-gray-200 rounded cursor-pointer peer-checked:bg-gray-200 peer-checked:border-gray-400 h-full"
              >
                <span className="text-center text-base">Freight Hauling Services</span>
              </label>
            </div>

            <div className="relative">
              <input
                type="radio"
                id="fueling"
                name="inquiryType"
                className="peer sr-only"
                onChange={() => handleRadioChange("Mobile Fueling Services")}
                checked={formData.inquiryType === "Mobile Fueling Services"}
              />
              <label
                htmlFor="fueling"
                className="flex items-center justify-center p-3 bg-gray-100 border border-gray-200 rounded cursor-pointer peer-checked:bg-gray-200 peer-checked:border-gray-400 h-full"
              >
                <span className="text-center text-base">Mobile Fueling Services</span>
              </label>
            </div>

            <div className="relative">
              <input
                type="radio"
                id="employment"
                name="inquiryType"
                className="peer sr-only"
                onChange={() => handleRadioChange("Employment Opportunities")}
                checked={formData.inquiryType === "Employment Opportunities"}
              />
              <label
                htmlFor="employment"
                className="flex items-center justify-center p-3 bg-gray-100 border border-gray-200 rounded cursor-pointer peer-checked:bg-gray-200 peer-checked:border-gray-400 h-full"
              >
                <span className="text-center text-base">Employment Opportunities</span>
              </label>
            </div>

            <div className="relative">
              <input
                type="radio"
                id="carb"
                name="inquiryType"
                className="peer sr-only"
                onChange={() => handleRadioChange("CARB Inspection Services")}
                checked={formData.inquiryType === "CARB Inspection Services"}
              />
              <label
                htmlFor="carb"
                className="flex items-center justify-center p-3 bg-gray-100 border border-gray-200 rounded cursor-pointer peer-checked:bg-gray-200 peer-checked:border-gray-400 h-full"
              >
                <span className="text-center text-base">CARB Inspection Services</span>
              </label>
            </div>

            <div className="relative">
              <input
                type="radio"
                id="general"
                name="inquiryType"
                className="peer sr-only"
                onChange={() => handleRadioChange("General Inquiry")}
                checked={formData.inquiryType === "General Inquiry"}
              />
              <label
                htmlFor="general"
                className="flex items-center justify-center p-3 bg-gray-100 border border-gray-200 rounded cursor-pointer peer-checked:bg-gray-200 peer-checked:border-gray-400 h-full"
              >
                <span className="text-center text-base">General Inquiry</span>
              </label>
            </div>
          </div>
        </div>

        {/* Message Section */}
        <div className="mb-8">
          <label htmlFor="message" className="block text-2xl font-bold mb-3">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-8">
          <button
            type="submit"
            className="px-8 py-3 bg-orange-500 text-white text-lg font-medium rounded hover:bg-orange-600 transition-colors"
          >
            Submit Button
          </button>
        </div>

        {/* Why Choose Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Why Choose AX Transportation</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-lg">
                <strong>24/7 Support:</strong> We're always available to assist you.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-lg">
                <strong>Reliable & Timely Service:</strong> Trusted by businesses nationwide.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-lg">
                <strong>Expert Team:</strong> Decades of experience in transportation & fueling.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">◦</span>
              <span className="text-lg">
                <strong>Need urgent assistance?</strong> Call us at (123) 456-7890 for immediate support!
              </span>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default Contact

