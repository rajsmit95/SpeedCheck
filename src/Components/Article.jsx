import React from "react";
import DownloadICon from "../assests/Downloda.png";
import UploadIcon from "../assests/Upload.png";
import PingIcon from "../assests/Ping.png";

function Article() {
  const dataObject = [
    {
      title: "Download Speed",
      description:
        "How fast information can transfer to you. It affects things like the duration it takes to download large files or display pages with many images. Download speed is measured in megabits per second (Mbps).",
      titleIcon: DownloadICon,
    },
    {
      title: "Upload Speed",
      description:
        "How fast information can transfer from you. It affects things like how long it takes to post images to social media or send big files via email attachments. Upload speed is measured in megabits per second (Mbps).",
      titleIcon: UploadIcon,
    },
    {
      title: "Ping Speed",
      description:
        "It is the hey time of your internet connection - how fast you get a response after you have sent a request. A fast ping means a more responsive connection. Ping is measured in milliseconds (ms).",
      titleIcon: PingIcon,
    },
  ];

  return (
    <div>
      <section>
    
        <div className="text-[#fff]">
          {/* Header-section */}
          <div className="p-5">
            <h3 className="text-slate-100 py-1 text-3xl font-[600] leading-10">What Do We Measure In An Internet Speed Test?</h3>
            <p className="text-slate-200 text-[20px] leading-10">
              Speed.one Internet Speed Test checks how fast is your internet
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
