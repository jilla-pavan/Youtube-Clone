import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import { Key } from "react";
import VideoInfo from "./VideoInfo";
import CommentContainer from "./CommentContainer";

function WatchPage() {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [videInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    fetchVideoInfo();
  }, []);

  const fetchVideoInfo = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        searchParam.get("v") +
        "&key=" +
        "AIzaSyDKIwSlClI2p1yBUuQS8xD6yPe79cTDVYQ"
    );
    const json = await data.json();
    console.log(json.items[0].snippet.title);
    setVideoInfo(json?.items[0]);
  };

  return (
    <div className="p-2 m-2 ">
      <div className="">
        <iframe
          className="rounded-lg"
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div className=""><VideoInfo video={videInfo} /></div>
      <div className="">
        <CommentContainer />
      </div>
    </div>
  );
}

export default WatchPage;
