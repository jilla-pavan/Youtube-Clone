import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_YOUTUBE } from "../utils/constants";

function VideoContainer() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchYouTubeApi();
  }, []);

  const fetchYouTubeApi = async () => {
    const fetchData = await fetch(API_YOUTUBE);
    const json = await fetchData.json();
    // console.log(json.items[0].snippet.title);
    setvideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard info={video} />;
      })}
    </div>
  );
}

export default VideoContainer;
