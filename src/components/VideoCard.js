import React from "react";

// function VideoCard() {
//   return <div className="">hii</div>;
// }

// export default VideoCard;

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div className="w-96 h-[280px] p-4 m-2 bg-slate-200 shadow-lg rounded-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="">
        <li className="text-sm font-bold">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>{" "}
    </div>
  );
}

export default VideoCard;
