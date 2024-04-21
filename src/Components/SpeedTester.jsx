import React, { useState } from "react";
import { useNetworkSpeedTest } from "@rtbjs/network-speed-test";

function SpeedTester() {
  const { download, upload, runTest } = useNetworkSpeedTest();
  const [runningTest, setRunningTest] = useState(false);
  const handleClick = () => {
    // Check if a test is already running
    if (!runningTest) {
      // Set the flag to indicate that a test is running
      setRunningTest(true);
      // Start the network speed test
      runTest().then(() => {
        // After the test completes, reset the flag
        setRunningTest(false);
      });
    }
  };

  return (
    <div>
      <h2>My Component</h2>
      <p>Download speed is: {download.result.meanClientMbps}</p>
      <p>Upload speed is: {upload.result.meanClientMbps}</p>
      <p>Ping time : {upload.result.elapsedTime}</p>
      <button onClick={handleClick} disabled={runningTest}>
        {runningTest ? "Test Running..." : "Start Test"}
      </button>
    </div>
  );
}

export default SpeedTester;
