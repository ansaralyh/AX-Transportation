import { Instance } from "../../Apis/GlobelApi";

const assignShift = async () => {
    try {
    //   const payload = {
    //     driverId: selectedDriverId,
    //     startTime: new Date(`${date}T${startTime}`),
    //     endTime: new Date(`${date}T${endTime}`),
    //   };
  
      const response = await Instance.post("/shifts/assign", payload);
      console.log("Shift assigned:", response.data);
    } catch (error) {
      console.error("Error assigning shift:", error);
    }
  };
  