
const DashboardContent = () => {
  return (
    <div className='mt-4 ml-6'>
      <div className='border-3 flex g'>
      <div className='rounded bg-[#FFFFFF] shadow-2xl w-[600px] h-[842px] px-4'>
        <h1 className='text-[#092C4C] text-3xl font-bold mb-6'>Drivers</h1>
        <input
      type="text"
      placeholder="Q Search Driver"
      className="w-full h-[44px] p-2 border-none bg-[#F4F6F9]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4F6F9]"
    />

      </div>
      <div className=' w-full'></div>
      </div>
      <h2>Upcoming Assignments</h2>
      <div className='border-2 border-green-500 w-full h-[340px]'>

      </div>
      <div className='border-2 border-green-500 w-full h-[340px] mt-20'>

      </div>
    </div>
  )
}

export default DashboardContent