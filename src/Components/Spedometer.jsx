import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer/slim";
import { useNetworkSpeedTest } from "@rtbjs/network-speed-test";

function Speedometer() {
  const { download, upload, runTest, error } = useNetworkSpeedTest();
  const [runningTest, setRunningTest] = useState(false);
  const [runningButton, setRunningBtn] = useState(false)
  

  const [screenSize, setScreenSize] = useState(window.innerWidth)


  useEffect(() => {
      setScreenSize(window.innerWidth)
      // This is my code Idle
      // Let's code here
      if(download.isRunning || upload.isRunning) {
        setRunningBtn(true)
      }else if(download.isComplete || upload.isComplete){
        setRunningBtn(false)
      }

      // Let's check the output, I hope It will solve.....
      // The whole source will provide on Gith-hub 
     
  },[upload.isRunning, download.isRunning, download.isComplete, upload.isComplete])


  console.log(screenSize)



  const handleClick = () => {
    // Check if a test is already running
    if (!runningTest) {
      // Set the flag to indicate that a test is running
      setRunningTest(true);
      // Start the network speed test
      runTest()
        .then(() => {
          // After the test completes, reset the flag
          setRunningTest(false);
        })
        .catch((err) => {
          // Handle errors if the network speed test fails
          console.error("Network speed test failed:", err);
          setRunningTest(false);
        });
    }
  };


  const cousTomStyle = {
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  // Determine which value to display based on test completion and running status
  const speedometerValue = download.isComplete ? upload.result.meanClientMbps : download.result.meanClientMbps
  
  return (
    <div className="p-5" style={{ textAlign: "center" }}>
      <div  className="mx-auto  w-full md:w-[500px]">
        {error && <p>Error: {error.message}</p>}
        <ReactSpeedometer
          maxValue={100}
          value={runningButton ? speedometerValue : 0}
          needleColor="red"
          startColor="green"
          segments={10}
          endColor="blue"
          needleHeightRatio = {0.8}
          needleTransitionDuration={200}
          needleTransition = 'easeLinear'
          width = {screenSize > 500 ? 500 : 350}
          height= {screenSize > 500 ? 300 : 200}
          style = {cousTomStyle}
                    
        />
      </div>
      <div>
        <button onClick={handleClick} className="px-10 py-3 border-[1px] bg-green-400 font-[600] border-green-400 rounded-md hover:bg-transparent hover:text-slate-100  my-5 duration-150 ease-in-out">
          {runningButton ? "Testing....." : "Start Test"}
        </button>
      </div>
      <div>
        <div className="flex flex-row items-center justify-between md:justify-around px-1 lg:px-20 xl:px-32 py-5">
            <div className="w-[100px]  md:w-[220px] lg:w-[250px] h-[100px] md:h-[150px] shadow-2xl border-[1px] border-slate-500 flex flex-col items-center justify-center rounded-2xl my-2 md:my-1">
                <span className="text-sm md:text-xl font-[700] text-slate-50 tracking-wider">Download</span> 
                <span className="text-sm md:text-xl font-[300] text-slate-100 tracking-wider">{download.isComplete ? Math.floor(download.result.meanClientMbps) : 0 } mbps</span>
            </div>
            <div className="w-[100px]  md:w-[220px] lg:w-[250px] h-[100px] md:h-[150px] shadow-2xl border-[1px] border-slate-500 flex flex-col items-center justify-center rounded-2xl my-2 md:my-1">
                <span className="text-sm md:text-xl font-[700] text-slate-50 tracking-wider">Upload</span> 
                <span  className="text-sm md:text-xl font-[300] text-slate-100 tracking-wider">{upload.isComplete ? Math.floor(upload.result.meanClientMbps): 0} mbps</span>               
            </div>
            <div className="w-[100px]  md:w-[220px] lg:w-[250px] h-[100px] md:h-[150px] shadow-2xl border-[1px] border-slate-500 flex flex-col items-center justify-center rounded-2xl my-2 md:my-1">
                <span className="text-sm md:text-xl font-[700] text-slate-50 tracking-wider">Ping</span> 
                <span  className="text-sm md:text-xl font-[300] text-slate-100 tracking-wider">{download.isComplete && upload.isComplete ? Math.floor(download.result.elapsedTime) : 0 } sec</span>                 
            </div>
        </div>
      </div>
    </div>
  );
}

export default Speedometer;
