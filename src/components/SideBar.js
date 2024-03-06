import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="m-2 w-52 shadow-lg">
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="data:image/png;base64,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"
        />
        <h1 className="m-2">
          <Link to={"/"}>Home</Link>
        </h1>
      </div>
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmc6pRnovqQexiLuoN6xu3iMKId9I2iHC3pQ&usqp=CAU"
        />
        <h1 className="m-2">Shorts</h1>
      </div>
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1UMY3HwezVdRMIluLmTHH2_A4oaMA70uCw&usqp=CAU"
        />
        <h1 className="m-2">Subscriptions</h1>
      </div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
      />
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="data:image/png;base64,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"
        />
        <h1 className="m-2">You</h1>
      </div>
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmc6pRnovqQexiLuoN6xu3iMKId9I2iHC3pQ&usqp=CAU"
        />
        <h1 className="m-2">Live</h1>
      </div>
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1UMY3HwezVdRMIluLmTHH2_A4oaMA70uCw&usqp=CAU"
        />
        <h1 className="m-2">History</h1>
      </div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
      />
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="data:image/png;base64,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"
        />
        <h1 className="m-2">Trending</h1>
      </div>
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmc6pRnovqQexiLuoN6xu3iMKId9I2iHC3pQ&usqp=CAU"
        />
        <h1 className="m-2">Shopping</h1>
      </div>
      <div className="flex m-2 px-2">
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1UMY3HwezVdRMIluLmTHH2_A4oaMA70uCw&usqp=CAU"
        />
        <h1 className="m-2">Music</h1>
      </div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
      />
    </div>
  );
}

export default SideBar;
