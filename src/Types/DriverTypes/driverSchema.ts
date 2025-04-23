import { z } from "zod";

// Address Schema
const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "ZIP code is required"),
});

// CDL Schema
const cdlSchema = z.object({
  number: z.string().min(1, "License number is required"),
  state: z.string().min(1, "State is required"),
  expirationDate: z.coerce.date().refine((date) => date > new Date(), {
    message: "CDL expiration date must be in the future",
  }),
  endorsements: z.object({
    tanker: z.coerce.boolean(),
    hazmat: z.coerce.boolean(),
    doubleTriples: z.coerce.boolean(),
    other: z.string().optional(),
  }),
  yearsOfExperience: z.coerce.number().min(0, "Years of experience must be 0 or more"),
});

// Employment History
const employmentHistorySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  reasonForLeaving: z.string().min(1, "Reason for leaving is required"),
});

// Reference Schema
const referenceSchema = z.object({
  name: z.string().min(1, "Reference name is required"),
  relationship: z.string().min(1, "Relationship is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

// Document Schema
const documentsSchema = z.object({
  cdlDocument: z.instanceof(File, { message: "CDL document is required" })
    .refine((file) => file.size > 0, "File cannot be empty"),
  socialSecurityCard: z.instanceof(File, { message: "Social security card is required" })
    .refine((file) => file.size > 0, "File cannot be empty"),
  profilePhoto: z.instanceof(File, { message: "Profile photo is required" })
    .refine((file) => file.size > 0, "File cannot be empty"),
  medicalCertificate: z.instanceof(File, { message: "Medical certificate is required" })
    .refine((file) => file.size > 0, "File cannot be empty"),
    drivingRecord: z.instanceof(File, { message: "drivingRecord is required" })
    .refine((file) => file.size > 0, "File cannot be empty"),
});

// Main Schema
export const driverFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  dateOfBirth: z.coerce.date().refine((date) => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 21;
  }, "You must be at least 21 years old"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  emailAddress: z.string().email("Invalid email address"),
  address: addressSchema,
  isLegallyAuthorized: z.coerce.boolean(),
  hasBeenConvicted: z.coerce.boolean(),
  convictionExplanation: z.string().optional(),

  cdl: cdlSchema,
  employmentHistory: z.array(employmentHistorySchema).min(1, "At least one employment entry is required"),

  drivingHistory: z.object({
    hadAccidents: z.coerce.boolean(),
    accidentDetails: z.string().optional(),
    hadViolations: z.coerce.boolean(),
    violationDetails: z.string().optional(),
  }),

  references: z.array(referenceSchema).min(2, "At least two references are required"),

  documents: documentsSchema,

  hasAgreedToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" })
  }),
  signature: z.string().min(1, "Signature is required"),
  signatureDate: z.coerce.date(),
}).superRefine((data, ctx) => {
  if (data.hasBeenConvicted && !data.convictionExplanation) {
    ctx.addIssue({
      path: ["convictionExplanation"],
      code: z.ZodIssueCode.custom,
      message: "Conviction explanation is required when convicted",
    });
  }
});

export type DriverFormValues = z.infer<typeof driverFormSchema>;
