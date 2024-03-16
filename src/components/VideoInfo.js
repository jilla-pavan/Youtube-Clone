import React from "react";

function VideoInfo(prop) {
  const { video } = prop;
  console.log(video);
  const { snippet } = video;
  const { title, channelTitle } = { snippet };
  return (
    <div className=" bg-slate-200 w-[800px] my-2 p-2 rounded-lg shadow-lg">
      <h1 className=" text- text-xl font-bold py-2">{title}</h1>
      <div className="flex items-center ">
        <img
          className="w-14 rounded-full "
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user-logo"
        />
        <h1 className="font-bold px-2">{channelTitle}</h1>
        <button className="border border-black py-2 m-2 px-4 font-bold shadow-lg rounded-full bg-  hover:bg-red-500">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default VideoInfo;
