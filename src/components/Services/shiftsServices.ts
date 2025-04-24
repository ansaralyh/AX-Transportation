  import { Instance } from "../../Apis/GlobelApi";

  export const assignShift = async () => {
      try {
        // const payload = {
        //   driverId: selectedDriverId,
        //   startTime: new Date(`${date}T${startTime}`),
        //   endTime: new Date(`${date}T${endTime}`),
        // };
    
        const response = await Instance.post("/shifts/assign", );
        console.log("Shift assigned:", response.data);
      } catch (error) {
        console.error("Error assigning shift:", error);
      }
    };

    // export async function getAllShifts(): Promise<any> {
    //   try {
    //       const token = localStorage.getItem("token");
    //       // console.log("Sending token:", token);
    //     const response = await Instance.get("/shifts", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     return response.data.data.data; // Access `data` inside the response wrapper
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (error: any) {
    //     throw new Error(
    //       error.response?.data?.message || error.message || "Failed to get Drivers"
    //     );
    //   }
    // }
    