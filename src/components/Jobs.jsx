import React, {useEffect, useState} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

const Jobs = ({name}) => {
  const [jobs, setJobs] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const {user} = useParams();

  useEffect(() => {
    // Retrieve the stored data from localStorage
    const storedData = localStorage.getItem('jobsData');

    // Check if there is stored data
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Check if there is data for the current user
      if (parsedData[user]) {
        // Set the jobs value from stored data
        setJobs(parsedData[user]);
      } else {
        setJobs(0);
      }
    }
  }, [user]);

  const handleConfirm = () => {
    setIsSubmit(true);

    // Retrieve the stored data from localStorage
    const storedData = localStorage.getItem('jobsData');

    // Parse the stored data or create an empty object
    const parsedData = storedData ? JSON.parse(storedData) : {};

    // Update or add the jobs value for the current user
    parsedData[user] = jobs;

    // Store the updated data in localStorage
    localStorage.setItem('jobsData', JSON.stringify(parsedData));

    setTimeout(() => {
      setIsSubmit(false);
    }, 1500)
  };

  
  return (
    <div className="w-full h-grow">
        <div className="border-2 border-black flex flex-col items-center justify-center rounded-xl p-10 m-10 h-[90%] shadow-2xl bg-gray-100">
          <div className='text-black'>{user}</div>

           <div className='text-9xl leading-none'>
            <p className="text-red-500 font-semibold mb-5">{jobs}</p>
          </div>
          
          <div>
            <p className='font-bold text-xl italic text-gray-600 border-b-2 border-black mb-10'>-Jobs applied for</p>
          </div>

          <div className='grid grid-cols-6 w-1/2'>
            <button 
              className='col-span-6 bg-blue-500 py-2 mb-2 rounded-xl  shadow-md hover:shadow-xl text-white text-[100%] '
              onClick={()=>setJobs(jobs+1)}
            >
              Add a Job
            </button>

            <button
              className='col-span-5 mr-1'
              onClick={handleConfirm}
            >
              <p className='bg-green-400 rounded-lg py-2 px-4 text-white shadow:md hover:shadow-lg hover:bg-green-500 text-[100%]'>Confirm</p>
            </button>

            <button className='col-span-1 ml-1 bg-orange-300 rounded-lg shadow-md hover:bg-orange-400 hover:shadow-lg items-center '
              onClick={()=>setJobs(jobs-1)}
              >
                <div className='flex flex-col justify-center items-center'>
                  <AiOutlineArrowLeft className='w-[25px] h-[25px]'/>
                </div>
            </button>
          </div>
          {isSubmit && <p className='text-red-500 font-smiebold text-md mt-4'>Jobs updated successfully</p>}
        </div>
    </div>
  )
}

export default Jobs