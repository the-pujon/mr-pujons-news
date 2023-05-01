import React from "react";
import QZone1 from "../../../assets/assets/qZone1.png";
import QZone2 from "../../../assets/assets/qZone2.png";
import QZone3 from "../../../assets/assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light mt-4  py-3">
      <h4 className="ms-3">Q-Zone</h4>

      <div className="text-center">
        <img src={QZone1} alt="" />
        <img src={QZone2} alt="" />
        <img src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
