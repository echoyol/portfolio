const EducationItem = ({ uniData, direction }) => {
  const { uniName, uniContent, uniTL } = uniData
  return (
    <div className='flex justify-start  h-48 '>
      <div className='w-1/6 flex justify-center'>
        <div className='w-1 h-full bg-gray-600 rounded relative'>
          <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2'></div>
        </div>
      </div>
      {direction === 'left' ? (
        <div>
          <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-center text-sm sm:text-base md:text-lg'>
            {uniName}
          </div>
          <div className='p-3 text-purple-400 text-sm font-semibold'>
            {uniTL}
          </div>
          <div className='px-3 text-sm italic text-white'>{uniContent}</div>
        </div>
      ) : (
        <div className='w-1/3'></div>
      )}
    </div>
    // <div className='flex justify-between  h-48 '>
    //   {direction === 'right' ? (
    //     <div className='w-1/3 '>
    //       <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-center text-sm sm:text-base md:text-lg'>
    //         {uniName}
    //       </div>
    //       <div className='p-3 text-purple-400 text-sm font-semibold'>
    //         {uniTL}
    //       </div>
    //       <div className='px-3 text-sm italic text-white'>{uniContent}</div>
    //     </div>
    //   ) : (
    //     <div className='w-1/3'></div>
    //   )}
    //   <div className='w-1/6 flex justify-center'>
    //     <div className='w-1 h-full bg-gray-600 rounded relative'>
    //       <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2'></div>
    //     </div>
    //   </div>
    //   {direction === 'left' ? (
    //     <div className='w-1/3 '>
    //       <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-center text-sm sm:text-base md:text-lg'>
    //         {uniName}
    //       </div>
    //       <div className='p-3 text-purple-400 text-sm font-semibold'>
    //         {uniTL}
    //       </div>
    //       <div className='px-3 text-sm italic text-white'>{uniContent}</div>
    //     </div>
    //   ) : (
    //     <div className='w-1/3'></div>
    //   )}
    // </div>
  )
}

export default EducationItem
