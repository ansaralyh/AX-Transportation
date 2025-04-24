import { Instance } from "../../Apis/GlobelApi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getAllUsers(): Promise<any> {
    try {
        const token = localStorage.getItem("token");
        // console.log("Sending token:", token);
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
        error.response?.data?.message || error.message || "Failed to get Users"
      );
    }
  }
