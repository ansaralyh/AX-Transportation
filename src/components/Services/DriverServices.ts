import { Instance } from "../../Apis/GlobelApi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getAllDrivers(): Promise<any> {
    try {
        const token = localStorage.getItem("token");
        console.log("Sending token:", token);
      const response = await Instance.get("/drivers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data.data; // Access `data` inside the response wrapper
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || error.message || "Failed to get Drivers"
      );
    }
  }

  export const updateApplicationStatus = async (
    id: string,
    token: string
  ) => {
    return Instance.put(
      `/drivers/${id}/approve`,
      {}, // if no body needed
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  
  export const rejectApplicationStatus = async (
    id: string,
    token: string
  ) => {
    return Instance.put(
      `/drivers/${id}/reject`,
      {}, // if no body needed
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  