export interface PerformanceCardType {
    title: string;
    value: string;
    progress: number;
    progressColor: string;
  }
  
  const PerformanceCardData: PerformanceCardType[] = [
    {
      title: "Total Trips Completed",
      value: "345",
      progress: 78,
      progressColor: "bg-orange-500",
    },
    {
      title: "Average Trip Rating",
      value: "4.8/5",
      progress: 90,
      progressColor: "bg-cyan-500",
    },
    {
      title: "On-Time Deliveries",
      value: "95%",
      progress: 95,
      progressColor: "bg-green-500",
    },
    {
      title: "Total Distance Driven",
      value: "2343 KM",
      progress: 78,
      progressColor: "bg-blue-500",
    },
    {
      title: "Delayed Deliveries",
      value: "5",
      progress: 5,
      progressColor: "bg-[#5C00FB]",
    },
  ];
  
  export default PerformanceCardData;