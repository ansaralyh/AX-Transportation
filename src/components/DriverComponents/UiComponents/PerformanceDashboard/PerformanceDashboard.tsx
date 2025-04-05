import {
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    BarChart,
    Bar,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const lineData = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 300 },
    { name: "May", value: 50 },
    { name: "Jun", value: 300 },
  ];
  const barData = [
    { name: "Vehicle 1", value: 500 },
    { name: "Vehicle 2", value: 400 },
    { name: "Vehicle 3", value: 600 },
    { name: "Vehicle 1", value: 500 },
    { name: "Vehicle 2", value: 400 },
    { name: "Vehicle 3", value: 600 },
    { name: "Vehicle 1", value: 500 },
    { name: "Vehicle 2", value: 400 },
    { name: "Vehicle 3", value: 600 },
  ];
  const pieData = [
    { name: "On-Time", value: 90 },
    { name: "Delayed", value: 5 },
  ];
  const COLORS = ["#22C55E", "#EF4444"];
  
  export default function PerformanceDashboard() {
    return (
      <div className="bg-white p-6 rounded-3xl mt-12">
        <h2 className="text-2xl font-bold mb-6">Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#EBEBEBA6] rounded-lg p-6 shadow-md">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="font-semibold text-lg">Trip Volume Over Time</h3>
              <select className="outline-0 bg-[#DDDDDD] font-semibold rounded p-2 text-sm">
                <option>Month</option>
                <option>Week</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#62FF00" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-[#F2F2F2] rounded-lg p-6 shadow-md">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="font-semibold text-lg">On-Time vs. Delayed Deliveries</h3>
              <select className="outline-0 bg-[#DDDDDD] font-semibold rounded p-2 text-sm">
                <option>Month</option>
                <option>Week</option>
              </select>
            </div>
            <div className="flex justify-center items-center">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} dataKey="value">
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} dataKey="value">
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
  
          <div className="bg-[#F2F2F2] rounded-lg p-6 shadow-md">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="font-semibold text-lg">Distance by Vehicle</h3>
              <select className="outline-0 bg-[#DDDDDD] font-semibold rounded p-2 text-sm">
                <option>Month</option>
                <option>Week</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData} barGap={0} barCategoryGap={10}>
                <YAxis hide={true} />
                <Tooltip />
                <Bar dataKey="value" barSize={30}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value < 500 ? "#1344C0" : "#02D59D"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-[#F2F2F2] rounded-lg p-6 shadow-md">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="font-semibold text-lg">Fuel Consumption Trends</h3>
              <select className="outline-0 bg-[#DDDDDD] font-semibold rounded p-2 text-sm">
                <option>Month</option>
                <option>Week</option>
              </select>
            </div>
            <div className="flex items-center justify-center md:mt-46">
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div className="bg-[#6A0404] h-4" style={{ width: "67%" }}></div>
              </div>
              <h1 className="text-sm font-semibold ml-2">67%</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  