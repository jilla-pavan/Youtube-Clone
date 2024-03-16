import React, { useEffect, useState } from "react";
import MsgLive from "./MsgLive";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomMessage, getRandomName } from "../utils/helper";

import store from "../utils/store";

function LiveChat() {
  const dispatch = useDispatch();
  const [inputMsg, setInputMsg] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  const fetch = async () => {
    const data = await fetch(
      "https://api.parser.name/?api_key=YOUR_KEY&endpoint=generate"
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          msg: getRandomMessage(25),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="">
      <div className="w-[440px] h-[440px] rounded-lg bg-slate-200 shadow-lg p-2  overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c) => {
          return <MsgLive name={c.name} msg={c.msg} />;
        })}
      </div>

      <div className="w-[440px] h-[40px] rounded-lg p-2 bg-slate-200 my-2  flex items-center">
        <span className=""></span>
        <input
          value={inputMsg}
          onChange={(e) => {
            setInputMsg(e.target.value);
          }}
          className=" rounded-lg w-8/12 p-1"
          placeholder="Write Here"
        />
        <button
          className="border border-black rounded-lg px-4 mx-4"
          onClick={() => {
            dispatch(
              addMessage({
                name: "jilla pavan",
                msg: inputMsg,
              })
            );
          }}
        >
          Submit{" "}
        </button>
      </div>
    </div>
  );
}

export default LiveChat;
