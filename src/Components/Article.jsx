import React from "react";
import DownloadICon from "../assests/Downloda.png";
import UploadIcon from "../assests/Upload.png";
import PingIcon from "../assests/Ping.png";

function Article() {
  const dataObject = [
    {
      title: "Download Speed",
      description:
        "How quickly you can absorb knowledge. It has an impact on things like how long it takes to download big files or load pages with lots of photos. Megabits per second (Mbps) is a unit of measurement for download speed.",
      titleIcon: DownloadICon,
    },
    {
      title: "Upload Speed",
      description:
        "How quickly you can impart information. It has an impact on things like the time it takes to transfer large files via email attachments or upload photographs to social media. Megabits per second (Mbps) are used to measure upload speed.",
      titleIcon: UploadIcon,
    },
    {
      title: "Ping Speed",
      description:
        "This refers to the reaction time of your internet connection, or the speed at which a request is answered. A more responsive connection is indicated by a quick ping. There are milliseconds (ms) in ping.",
      titleIcon: PingIcon,
    },
  ];

  return (
    <div>
      <section>
    
        <div className="text-[#fff] text-center">
          {/* Header-section */}
          <div className="p-5">
            <h3 className="text-slate-100 py-1 text-3xl font-[600] leading-10">What Do We Measure In An Internet Speed Test?</h3>
            <p className="text-slate-200 text-[20px] leading-10">
              Internet Speed Test checks how fast is your internet
              connection speed and bandwidth for broadband WiFi and mobile
              networks.
            </p>
          </div>
          {/* Secondary Section */}
          <div className="flex flex-col md:flex-row justify-around items-center p-5">
            {dataObject.map((data, value) => {
              return (
                <div key={value} className="w-[400px]">
                  <div className="w-[80px] mx-auto">
                    <img src={data.titleIcon} alt="title_Icon" className="w-full h-auto" />
                  </div>
                  <div className="p-5 md:p-2">
                    <h4 className="text-2xl font-[600] py-1 leading-10">{data.title}</h4>
                    <p className="text-[18px] font-[400] leading-8">{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
