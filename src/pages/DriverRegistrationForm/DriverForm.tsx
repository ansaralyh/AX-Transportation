import {
  SubmitHandler,
  useForm,
  useFieldArray,
  FieldError,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  driverFormSchema,
  DriverFormValues,
} from "../../Types/DriverTypes/driverSchema";
import { useApplyDriver } from "../../Hooks/DriverHooks/useApplyDriver";
import { useEffect } from "react";
import { toast } from "react-toastify";

const DriverForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DriverFormValues>({
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
      cdl: {
        number: "",
        state: "",
        expirationDate: new Date(),
        endorsements: {
          tanker: false,
          hazmat: false,
          doubleTriples: false,
          other: "",
        },
        yearsOfExperience: 0,
      },
      employmentHistory: [
        {
          companyName: "",
          position: "",
          startDate: new Date(),
          endDate: new Date(),
          reasonForLeaving: "",
        },
      ],
      references: [
        {
          name: "",
          relationship: "",
          phoneNumber: "",
        },
      ],
      drivingHistory: {
        hadAccidents: false,
        accidentDetails: "",
        hadViolations: false,
        violationDetails: "",
      },

      documents: {
        cdlDocument: undefined as unknown as File,
        socialSecurityCard: undefined as unknown as File,
        profilePhoto: undefined as unknown as File,
        medicalCertificate: undefined as unknown as File,
      },

      isLegallyAuthorized: false,
      hasBeenConvicted: false,
      hasAgreedToTerms: true,
      signature: "",
      signatureDate: new Date(),
    },
  });

  const { fields: employmentFields, append: appendEmployment } = useFieldArray({
    control,
    name: "employmentHistory",
  });

  const { fields: referenceFields, append: appendReference } = useFieldArray({
    control,
    name: "references",
  });
  const mutation = useApplyDriver();

  const onSubmit: SubmitHandler<DriverFormValues> = async (data) => {
    try {
      const formData = new FormData();

      // Append simple fields
      formData.append("fullName", data.fullName);
      formData.append("dateOfBirth", new Date(data.dateOfBirth).toISOString());
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("emailAddress", data.emailAddress);
      formData.append(
        "isLegallyAuthorized",
        JSON.stringify(data.isLegallyAuthorized)
      );
      formData.append(
        "hasBeenConvicted",
        JSON.stringify(data.hasBeenConvicted)
      );
      formData.append(
        "hasAgreedToTerms",
        JSON.stringify(data.hasAgreedToTerms)
      );
      formData.append("signature", data.signature);
      formData.append("signatureDate", data.signatureDate.toISOString());

      // Append address
      formData.append("address[street]", data.address.street);
      formData.append("address[city]", data.address.city);
      formData.append("address[state]", data.address.state);
      formData.append("address[zipCode]", data.address.zipCode);

      // Append CDL information
      formData.append("cdl[number]", data.cdl.number);
      formData.append("cdl[state]", data.cdl.state);
      formData.append(
        "cdl[expirationDate]",
        data.cdl.expirationDate.toISOString()
      );
      formData.append(
        "cdl[endorsements][tanker]",
        JSON.stringify(data.cdl.endorsements.tanker)
      );
      formData.append(
        "cdl[endorsements][hazmat]",
        JSON.stringify(data.cdl.endorsements.hazmat)
      );
      formData.append(
        "cdl[endorsements][doubleTriples]",
        JSON.stringify(data.cdl.endorsements.doubleTriples)
      );
      formData.append("cdl[yearsOfExperience]", data.cdl.yearsOfExperience.toString());
      if (data.cdl.endorsements.other?.trim()) {
        formData.append(
          "cdl[endorsements][other]",
          data.cdl.endorsements.other
        );
      }

      // Append employment history
      data.employmentHistory.forEach((emp, index) => {
        formData.append(
          `employmentHistory[${index}][companyName]`,
          emp.companyName
        );
        formData.append(`employmentHistory[${index}][position]`, emp.position);
        formData.append(
          `employmentHistory[${index}][startDate]`,
          new Date(emp.startDate).toISOString()
        );
        if (emp.endDate) {
          formData.append(
            `employmentHistory[${index}][endDate]`,
            new Date(emp.endDate).toISOString()
          );
        }

        if (emp.reasonForLeaving) {
          formData.append(
            `employmentHistory[${index}][reasonForLeaving]`,
            emp.reasonForLeaving
          );
        }
      });

      // Append driving history
      formData.append(
        "drivingHistory[hadAccidents]",
        JSON.stringify(data.drivingHistory.hadAccidents)
      );
      if (data.drivingHistory.accidentDetails) {
        formData.append(
          "drivingHistory[accidentDetails]",
          data.drivingHistory.accidentDetails
        );
      }
      formData.append(
        "drivingHistory[hadViolations]",
        JSON.stringify(data.drivingHistory.hadViolations)
      );
      if (data.drivingHistory.violationDetails) {
        formData.append(
          "drivingHistory[violationDetails]",
          data.drivingHistory.violationDetails
        );
      }

      // Append references
      data.references.forEach((ref, index) => {
        formData.append(`references[${index}][name]`, ref.name);
        formData.append(`references[${index}][relationship]`, ref.relationship);
        formData.append(`references[${index}][phoneNumber]`, ref.phoneNumber);
      });

      // Append documents
      formData.append("documents[cdlDocument]", data.documents.cdlDocument);
      formData.append(
        "documents[socialSecurityCard]",
        data.documents.socialSecurityCard
      );
      formData.append("documents[profilePhoto]", data.documents.profilePhoto);
      formData.append(
        "documents[medicalCertificate]",
        data.documents.medicalCertificate
      );
      formData.append("documents[drivingRecord]", data.documents.drivingRecord);

      mutation.mutate(formData);
    } catch (error) {

      toast.error(error instanceof Error ? error.message : "Form submission failed");
    }
  };
  const documentFields = [
    { name: "cdlDocument", label: "CDL Document" },
    { name: "socialSecurityCard", label: "Social Security Card" },
    { name: "profilePhoto", label: "Profile Photo" },
    { name: "medicalCertificate", label: "Medical Certificate" },
    { name: "drivingRecord", label: "Driving Record" },
  ] as const;

  type Documents = DriverFormValues["documents"];
  type DocumentFieldName = keyof Documents;
  useEffect(() => {
    console.log("Form Errors:", errors);
  }, [errors]);

  return (
    <div className="bg-black h-[132px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
        <div className="relative w-[150px] sm:w-[200px] h-[250px] flex items-center mb-8 md:mb-0">
          <div className="absolute w-[250px] sm:w-[300px] h-full top-[-30px] left-[-98px] sm:left-[-220px] bg-[radial-gradient(circle,_#ffffff_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)] logo" />
          <img
            src="/assets/image 54.png"
            alt="AXT Transportation Logo"
            className="relative left-[-26px] sm:left-[-150px] top-[-45px] z-10 w-[120px] sm:w-[150px] h-auto"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap gap-10"
        >
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-[44px] font-bold mb-4">
              Driver Application Form
            </h2>
            <p className="text-[15px] text-[#737B7D] mb-[80px]">
              Need an experienced and skilled hand with custom IT projects?
              <br />
              Fill out the form to get a free consultation.
            </p>

            {/* Applicant Information */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Applicant Information</h2>
              <div className="space-y-4">
                <input
                  {...register("fullName")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}

                <input
                  type="datetime-local"
                  {...register("dateOfBirth")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500">{errors.dateOfBirth.message}</p>
                )}

                <input
                  {...register("phoneNumber")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}

                <input
                  {...register("emailAddress")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Email Address"
                />
                {errors.emailAddress && (
                  <p className="text-red-500">{errors.emailAddress.message}</p>
                )}
              </div>
            </section>

            {/* Address */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Current Address</h2>
              <div className="space-y-4">
                <input
                  {...register("address.street")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Street"
                />
                {errors.address?.street && (
                  <p className="text-red-500">
                    {errors.address.street.message}
                  </p>
                )}

                <div className="flex gap-4">
                  <input
                    {...register("address.city")}
                    className="flex-1 p-2 border-b border-gray-300 outline-none"
                    placeholder="City"
                  />
                  <input
                    {...register("address.state")}
                    className="w-24 p-2 border-b border-gray-300 outline-none"
                    placeholder="State"
                  />
                  <input
                    {...register("address.zipCode")}
                    className="w-32 p-2 border-b border-gray-300 outline-none"
                    placeholder="ZIP Code"
                  />
                </div>
                {errors.address?.city && (
                  <p className="text-red-500">{errors.address.city.message}</p>
                )}
                {errors.address?.state && (
                  <p className="text-red-500">{errors.address.state.message}</p>
                )}
                {errors.address?.zipCode && (
                  <p className="text-red-500">
                    {errors.address.zipCode.message}
                  </p>
                )}
              </div>
            </section>

            {/* Legal Information */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Legal Information</h2>
              <div className="space-y-4">
                <div>
                  <p>Are you legally authorized to work in the U.S.?</p>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        {...register("isLegallyAuthorized")}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                  </div>
                  {errors.isLegallyAuthorized && (
                    <p className="text-red-500">
                      {errors.isLegallyAuthorized.message}
                    </p>
                  )}
                </div>

                <div>
                  <p>Have you ever been convicted of a felony?</p>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        {...register("hasBeenConvicted")}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                  </div>
                  {errors.hasBeenConvicted && (
                    <p className="text-red-500">
                      {errors.hasBeenConvicted.message}
                    </p>
                  )}
                </div>

                {watch("hasBeenConvicted") && (
                  <textarea
                    {...register("convictionExplanation")}
                    className="w-full p-2 border-b border-gray-300 outline-none"
                    placeholder="Conviction explanation"
                  />
                )}
              </div>
            </section>

            {/* CDL Information */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">CDL Information</h2>
              <div className="space-y-4">
                <input
                  {...register("cdl.number")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="CDL License Number"
                />
                {errors.cdl?.number && (
                  <p className="text-red-500">{errors.cdl.number.message}</p>
                )}

                <div className="flex gap-4">
                  <input
                    {...register("cdl.state")}
                    className="flex-1 p-2 border-b border-gray-300 outline-none"
                    placeholder="State Issued"
                  />
                  <input
                    type="datetime-local"
                    {...register("cdl.expirationDate")}
                    className="flex-1 p-2 border-b border-gray-300 outline-none"
                  />
                </div>
                {errors.cdl?.state && (
                  <p className="text-red-500">{errors.cdl.state.message}</p>
                )}
                {errors.cdl?.expirationDate && (
                  <p className="text-red-500">
                    {errors.cdl.expirationDate.message}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("cdl.endorsements.tanker")}
                    />
                    <span className="ml-2">Tanker</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("cdl.endorsements.hazmat")}
                    />
                    <span className="ml-2">Hazmat</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("cdl.endorsements.doubleTriples")}
                    />
                    <span className="ml-2">Double/Triples</span>
                  </label>
                  <input
                    {...register("cdl.endorsements.other")}
                    className="p-1 border-b border-gray-300 w-32 outline-none"
                    placeholder="Other"
                  />
                </div>

                <input
                  type="number"
                  {...register("cdl.yearsOfExperience", {
                    valueAsNumber: true,
                  })}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Years of Experience"
                />
                {errors.cdl?.yearsOfExperience && (
                  <p className="text-red-500">
                    {errors.cdl.yearsOfExperience.message}
                  </p>
                )}
              </div>
            </section>

            {/* Employment History */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Employment History</h2>
              {employmentFields.map((field, index) => (
                <div key={field.id} className="mb-4">
                  <input
                    {...register(`employmentHistory.${index}.companyName`)}
                    className="w-full p-2 border-b border-gray-300 outline-none"
                    placeholder="Company Name"
                  />
                  <input
                    {...register(`employmentHistory.${index}.position`)}
                    className="w-full p-2 border-b border-gray-300 outline-none"
                    placeholder="Position Held"
                  />
                  <div className="flex gap-4 mt-2">
                    <input
                      type="datetime-local"
                      {...register(`employmentHistory.${index}.startDate`)}
                      className="flex-1 p-2 border-b border-gray-300 outline-none"
                    />
                    <input
                      type="datetime-local"
                      {...register(`employmentHistory.${index}.endDate`)}
                      className="flex-1 p-2 border-b border-gray-300 outline-none"
                    />
                  </div>
                  <input
                    {...register(`employmentHistory.${index}.reasonForLeaving`)}
                    className="w-full p-2 border-b border-gray-300 outline-none mt-2"
                    placeholder="Reason for Leaving"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  appendEmployment({
                    companyName: "",
                    position: "",
                    startDate: new Date(),
                    endDate: new Date(),
                    reasonForLeaving: "",
                  })
                }
                className="text-orange-500"
              >
                + Add Employment
              </button>
              {errors.employmentHistory && (
                <p className="text-red-500">
                  {errors.employmentHistory.message}
                </p>
              )}
            </section>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {/* Driving History */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Driving History</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("drivingHistory.hadAccidents")}
                    />
                    <span className="ml-2">Had accidents in past 3 years?</span>
                  </label>
                  {watch("drivingHistory.hadAccidents") && (
                    <textarea
                      {...register("drivingHistory.accidentDetails")}
                      className="w-full p-2 border-b border-gray-300 outline-none"
                      placeholder="Accident details"
                    />
                  )}
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("drivingHistory.hadViolations")}
                    />
                    <span className="ml-2">
                      Had violations in past 3 years?
                    </span>
                  </label>
                  {watch("drivingHistory.hadViolations") && (
                    <textarea
                      {...register("drivingHistory.violationDetails")}
                      className="w-full p-2 border-b border-gray-300 outline-none"
                      placeholder="Violation details"
                    />
                  )}
                </div>
              </div>
            </section>

            {/* References */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">References</h2>
              {referenceFields.map((field, index) => (
                <div key={field.id} className="mb-4">
                  <input
                    {...register(`references.${index}.name`)}
                    className="w-full p-2 border-b border-gray-300 outline-none"
                    placeholder="Name"
                  />
                  <input
                    {...register(`references.${index}.relationship`)}
                    className="w-full p-2 border-b border-gray-300 outline-none mt-2"
                    placeholder="Relationship"
                  />
                  <input
                    {...register(`references.${index}.phoneNumber`)}
                    className="w-full p-2 border-b border-gray-300 outline-none mt-2"
                    placeholder="Phone Number"
                  />
                  {/* <input
                    {...register(`references.${index}.email`)}
                    className="w-full p-2 border-b border-gray-300 outline-none mt-2"
                    placeholder="Email"
                    type="email"
                  /> */}
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  appendReference({
                    name: "",
                    relationship: "",
                    phoneNumber: "",
                    // email: "",
                  })
                }
                className="text-orange-500"
              >
                + Add Reference
              </button>
              {errors.references && (
                <p className="text-red-500">{errors.references.message}</p>
              )}
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Document Uploads</h2>
              <div className="space-y-4">
                {documentFields.map((doc) => (
                  <div key={doc.name} className="mb-4">
                    <label className="block mb-2">{doc.label}</label>
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setValue(
                            `documents.${doc.name}` as `documents.${DocumentFieldName}`,
                            file
                          );
                        }
                      }}
                      className="w-full p-2 border rounded"
                    />
                    {errors.documents?.[doc.name] && (
                      <p className="text-red-500">
                        {(errors.documents[doc.name] as FieldError)?.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
            {/* Consent Section */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Consent & Agreement</h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("hasAgreedToTerms")}
                    className="mr-2"
                  />
                  <span>I agree to the terms and conditions</span>
                </label>
                {errors.hasAgreedToTerms && (
                  <p className="text-red-500">
                    {errors.hasAgreedToTerms.message}
                  </p>
                )}

                <input
                  {...register("signature")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Signature"
                />
                {errors.signature && (
                  <p className="text-red-500">{errors.signature.message}</p>
                )}

                <input
                  type="datetime-local"
                  {...register("signatureDate")}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                />
                {errors.signatureDate && (
                  <p className="text-red-500">{errors.signatureDate.message}</p>
                )}
              </div>
            </section>

            <button
              type="submit"
              className="w-full h-[54px] bg-orange-500 text-white p-2 rounded"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "SUBMIT APPLICATION"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverForm;
