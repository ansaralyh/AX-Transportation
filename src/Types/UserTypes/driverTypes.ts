// API response wrapper
// export interface DriversApiResponse<Driver> {
//   data: Driver[];
//   pagination: {
//     currentPage: number;
//     totalPages: number;
//     totalRecords: number;
//     recordsPerPage: number;
//   };
// }

// Core domain model
export interface Driver {
  _id: string;
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  emailAddress: string;
  isLegallyAuthorized: boolean;
  hasBeenConvicted: boolean;
  convictionExplanation?: string;
  hasAgreedToTerms?: boolean;
  signature?: string;
  signatureDate?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  cdl: {
    number: string;
    state: string;
    expirationDate: number;
    endorsements?: {
      tanker?: boolean;
      hazmat?: boolean;
      doubleTriples?: boolean;
      other?: string;
    };
    yearsOfExperience?: number;
  };
  employmentHistory: {
    _id?: string;
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    reasonForLeaving: string;
  }[];
  drivingHistory: {
    hadAccidents: string; // Replace `any` with proper accident object type if needed
    hadViolations: string; // Replace `any` with proper violation object type if needed
    accidentDetails?: string;
    violationDetails?: string;
  };
  references: {
    _id?: string;
    name: string;
    relationship: string;
    phoneNumber: string;
  }[];
  applicationStatus: {
    isReviewed?: boolean;
    isHired?: boolean;
    isApproved?: boolean;
    status: string;
  };
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
