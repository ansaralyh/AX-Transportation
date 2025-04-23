import { Instance } from "./GlobelApi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const applyForDriver = async (formData: FormData): Promise<any> => {
  try {
    const response = await Instance.post("drivers/apply", formData);
    console.log("API Response:", response.data);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while submitting the application"
    );
  }
};
