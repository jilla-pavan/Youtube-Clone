import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_YOUTUBE } from "../utils/constants";
import { Link } from "react-router-dom";

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
        return <Link to={"/watch?v="+ video.id}  ><VideoCard info={video} /></Link>;
      })}
    </div>
  );
}

export default VideoContainer;
