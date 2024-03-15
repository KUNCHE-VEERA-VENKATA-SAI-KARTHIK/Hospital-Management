import React from "react";
import diabetes from "../assets/Diabetes.webp";
import Blood from "../assets/Blood Studies (Anemia).webp";
// import Tax from "../assets/Tax Saver.webp";
// import diabetes from "../assets/Diabetes.webp";
// import diabetes from "../assets/Diabetes.webp";
// import diabetes from "../assets/Diabetes.webp";
// import diabetes from "../assets/Diabetes.webp";
// import diabetes from "../assets/Diabetes.webp";
// import diabetes from "../assets/Diabetes.webp";
// import diabetes from "../assets/Diabetes.webp";

export default function Labtest() {
  const obj = [];
  return (
    <div className="flex justify-center mt-4 mb-5">
      <div className="shadow-lg pt-10 pb-5 rounded">
        <div className="flex  content-center  justify-center ">
          <img src={diabetes} className="h-50 w-20" />
        </div>
        <div className="flex  content-center  justify-center ">
          <p>diabetes</p>
        </div>
      </div>
    </div>
  );
}
