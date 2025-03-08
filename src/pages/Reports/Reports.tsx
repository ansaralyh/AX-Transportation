import React, { useState } from "react";
import PerformanceCardData from "../DashboardContent/PerformanceCardData";
import PerformanceCard from "../../components/DriverComponents/UiComponents/PerformanceCard";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  type ChartOptions,
} from "chart.js";
import { ChevronDown, File } from "lucide-react";
import { FuelMetric } from "../../components/DriverComponents/FuelReport/FuelMetric";
import Button from "../../components/DriverComponents/UiComponents/Button/Button";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Define filter types
type FilterType = "new" | "yearly" | "flat";
const AdminReports = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("yearly");

  // Sample data for the chart
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const earningsData = [
    80000, 110000, 90000, 160000, 205000, 180000, 170000, 190000, 200000,
    210000, 220000, 230000,
  ];

  // Chart options
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          title: () => "",
          label: (context) => {
            return `$${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 30,
        hoverRadius: 5,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  // Chart data
  const data = {
    labels: months,
    datasets: [
      {
        data: earningsData,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        borderWidth: 3,
        fill: false,
        pointBackgroundColor: "#22c55e",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#22c55e",
        pointHoverBorderWidth: 3,
        pointHoverRadius: 6,
        pointRadius: (context: any) => {
          // Make March point visible (index 2)
          return context.dataIndex === 2 ? 6 : 0;
        },
      },
    ],
  };
  return (
    <div className="mt-4 px-4 md:ml-[279px] sm:px-6 bg-[#F6F6F6] ">
      <div className=" mb-6">
        <h1 className="text-[#092C4C] text-2xl sm:text-3xl font-semibold">
          Trip Summary Report
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 lg:gap-16">
        {PerformanceCardData.map((item, index) => (
          <PerformanceCard key={index} data={item} />
        ))}
      </div>
      <div className="flex justify-between items-center mb-6 mt-8">
        <h1 className="text-3xl font-[roboto] font-semibold">
          Earnings Report
        </h1>
        <div className="flex space-x-6 bg-white p-3">
          <button
            className={`px-4 py-2 rounded-lg text-sm ${
              activeFilter === "new"
                ? "bg-orange-400 text-white"
                : "text-black bg-[#F6F6F6]"
            }`}
            onClick={() => setActiveFilter("new")}
          >
            I&apos;m new
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm ${
              activeFilter === "yearly"
                ? "bg-orange-400 text-white"
                : "text-black bg-[#F6F6F6]"
            }`}
            onClick={() => setActiveFilter("yearly")}
          >
            Yearly
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm ${
              activeFilter === "flat"
                ? "bg-orange-400 text-white"
                : "text-black bg-[#F6F6F6]"
            }`}
            onClick={() => setActiveFilter("flat")}
          >
            Flat Rate
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm  mx-auto mt-8">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Total Earnings</h2>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg text-sm">
                <span>Month</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-1">205k</div>
        </div>

        <div className="h-[368px] w-full">
          <Line options={options} data={data} />
        </div>
      </div>

      <h2 className="text-3xl font-[roboto] font-semibold mt-12 mb-4">Fuel Usage Report</h2>
      <div className="bg-gray-50 p-6 rounded-lg  ">

      <div className="flex justify-between items-center gap-4">
        <FuelMetric value="300 gallons" label="Total Fuel Consumed" />
        <FuelMetric value="4.5 MPG" label="Average MPG" />
        <FuelMetric value="$1,200" label="Total Fuel Cost" />
      </div>
    </div>
    <div className="flex items-center justify-end gap-4 mt-12">
    <Button text="📄 Download PDF" className="border-black"  variant="outline" />
    <Button text="📊 Export CSV" className="border-black" variant="outline" />
    <Button text="🖨️ Print Report"  />

    </div>
    </div>
  );
};

export default AdminReports;
