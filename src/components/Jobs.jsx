import React, {useContext, useEffect, useState} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { Context } from '../App';
import { styles } from '../styles';

const Jobs = ({name}) => {
  const [jobs, setJobs] = useState(null);
  const [newJob, setNewJob] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const {user} = useParams();
  const[theme, setTheme] = useContext(Context);

  const getJobData = async () => {
    await fetch(`https://jobs-backend-p2pa.onrender.com/api/${user}`, {
      method: 'GET',
      headers: { "Content-Type": 'application/json' },
    })
    .then((response) => response.json())
    .then((data) => setJobs(data.user.jobs));
  }
  useEffect(() => {

    setisLoading(true); // Set loading to true before making the API request

    getJobData()
      .then(() => {
        setisLoading(false); // Set loading to false when the data is received
      })
      .catch((error) => {
        console.error("Error:", error);
        setisLoading(false); // Set loading to false in case of an error
      });
    
  }, [])

  useEffect(() => {
    setisLoading(true); // Set loading to true before making the API request

    getJobData()
      .then(() => {
        setisLoading(false); // Set loading to false when the data is received
      })
      .catch((error) => {
        console.error("Error:", error);
        setisLoading(false); // Set loading to false in case of an error
      });
  }, [user])

  const handleConfirm = async () => {
    setIsSubmit(true);

    setNewJob(jobs);

    await fetch(`https://jobs-backend-p2pa.onrender.com/api/${user}`, {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({ jobs }), // Ensure jobs is a valid JSON object
    })
    .then((response) => {
      console.log("Response Content: ", response); // Log the response content here
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      // Handle the JSON data here
      console.log("Parsed Data: ", data); // Log the parsed data here
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors here
    })
    .finally(() => {
      setTimeout(() => {
        setIsSubmit(false);
      }, 1500)
    });


  }
  

  // useEffect(() => {
  //   // Retrieve the stored data from localStorage
  //   const storedData = localStorage.getItem('jobsData');

  //   // Check if there is stored data
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);

  //     // Check if there is data for the current user
  //     if (parsedData[user]) {
  //       // Set the jobs value from stored data
  //       setJobs(parsedData[user]);
  //     } else {
  //       setJobs(0);
  //     }
  //   }
  // }, [user]);

  // const handleConfirm = () => {
  //   setIsSubmit(true);

  //   // Retrieve the stored data from localStorage
  //   const storedData = localStorage.getItem('jobsData');

  //   // Parse the stored data or create an empty object
  //   const parsedData = storedData ? JSON.parse(storedData) : {};

  //   // Update or add the jobs value for the current user
  //   parsedData[user] = jobs;

  //   // Store the updated data in localStorage
  //   localStorage.setItem('jobsData', JSON.stringify(parsedData));

    // setTimeout(() => {
    //   setIsSubmit(false);
    // }, 1500)
  // };

  
  return (
    <div className="w-full h-grow">
        <div className={`${theme ? styles.homeContainerLight : styles.homeContainerDark } border-2 flex flex-col items-center justify-center rounded-xl p-10 m-10 h-[90%] shadow-2xl`}>
           <div className='text-9xl leading-none'>
            {isLoading ? ( 
              <ColorRing
                height="80"
                width="80"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            ) : (
              <p className="text-red-500 font-semibold mb-5">{jobs}</p>
            )}
            
          </div>
          
          <div>
            <p className={`${theme ? styles.jobsTextLight : styles.jobsTextDark } font-bold text-xl italic border-b-2  mb-10`}>-Jobs applied for</p>
          </div>

          <div className='flex flex-col items-center'>
            <button 
              className={`w-full ${theme ? styles.addJobBtnLight : styles.addJobBtnDark } text-white py-2 mb-2 rounded-xl shadow-md hover:shadow-xl  text-[100%]`}
              onClick={()=>setJobs(jobs+1)}
            >
              Add a Job
            </button>
              <div className='flex flex-row'>
                <button
                  className='  mr-1'
                  onClick={handleConfirm}
                  >
                  <p className={`${theme ? styles.confirmJobBtnLight : styles.confirmJobBtnDark } rounded-lg py-2 px-4 text-white shadow:md hover:shadow-lg text-[100%]`}>Confirm</p>
                </button>

                <button className=' ml-1 bg-orange-300 rounded-lg shadow-md hover:bg-orange-400 hover:shadow-lg items-center '
                  onClick={()=>setJobs(jobs-1)}
                  >
                    <div className='flex flex-col justify-center items-center'>
                      <AiOutlineArrowLeft className='w-10 h-5'/>
                    </div>
                </button>
              </div>
          </div>
          {isSubmit && <p className='text-red-500 font-semibold text-md mt-4'>Jobs updated successfully</p>}
        </div>
    </div>
  )
}

export default Jobs