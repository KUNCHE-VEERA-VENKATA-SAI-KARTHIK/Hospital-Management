import React from "react";
import diabetes from "../assets/Diabetes.webp";
import Blood from "../assets/Blood Studies (Anemia).webp";
import labbanner from "../assets/labbanner.png"
import HealthPackage from "../assets/HealthPackage.webp";
import Thyroid from "../assets/Thyroid.webp";
import VITAMIN from "../assets/VITAMIN.webp";
import WOMENSHEALTH from "../assets/WOMENS HEALTH.webp";
import Kidney from "../assets/Kidney.webp";
import HORMONE from "../assets/HORMONE.webp";
import HAIRFALL from "../assets/Hairfall.webp";
import FBC from "../assets/Full Body Checkup.webp";
import Liver from "../assets/Liver.webp";
import Fever from "../assets/Fever.webp";

export default function Labtest() {
  const obj = [];
  return (
    <>
    
    <div className="flex  justify-center">
    <div className="pt-8">
            <img src={labbanner}  alt="c2" />
    </div>
    </div>
    <div  className="h-10">
    <div className="flex justify-center space-x-4 mt-4 mb-5">
      <button>
      <div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
        <div className="  content-center  justify-center ">
          <img src={FBC} className="h-2% w-14" />
        </div>
        <div className="pl-3 content-center  justify-center ">
          <p>Full Body Checkup</p>
        </div>
      </div>
      </button>
      <button>
      <div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
        <div className="  content-center  justify-center ">
          <img src={diabetes} className="h-2% w-14" />
        </div>
        <div className="pl-3 content-center  justify-center ">
          <p>diabetes</p>
        </div>
      </div>
      </button>
      <button>
      <div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
        <div className="  content-center  justify-center ">
          <img src={WOMENSHEALTH} className="h-2% w-14" />
        </div>
        <div className="pl-3 content-center  justify-center ">
          <p>Women's health</p>
        </div>
      </div>
      </button>
      <button>
      <div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
        <div className="  content-center  justify-center ">
          <img src={Thyroid} className="h-2% w-14" />
        </div>
        <div className="pl-3 content-center  justify-center ">
          <p>Thyroid</p>
        </div>
      </div>
      </button>
      <button>
      <div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
        <div className="  content-center  justify-center ">
          <img src={HealthPackage} className="h-2% w-14" />
        </div>
        <div className="pl-3 content-center  justify-center ">
          <p>Health Package</p>
        </div>
      </div>
      </button>
      <button>
      <div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
        <div className="  content-center  justify-center ">
          <img src={Fever} className="h-2% w-14" />
        </div>
        <div className="pl-3 content-center  justify-center ">
          <p>Fever</p>
        </div>
      </div>
      </button>
    </div>

<div className="flex justify-center space-x-4 mt-4 mb-5">
<button>
<div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
  <div className="  content-center  justify-center ">
    <img src={VITAMIN} className="h-2% w-14" />
  </div>
  <div className="pl-3 content-center  justify-center ">
    <p>Vitamin</p>
  </div>
</div>
</button>
<button>
<div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
  <div className="  content-center  justify-center ">
    <img src={Blood} className="h-2% w-14" />
  </div>
  <div className="pl-3 content-center  justify-center ">
    <p>Blood Test</p>
  </div>
</div>
</button>
<button>
<div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
  <div className="  content-center  justify-center ">
    <img src={Liver} className="h-2% w-14" />
  </div>
  <div className="pl-3 content-center  justify-center ">
    <p>Liver</p>
  </div>
</div>
</button>
<button>
<div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
  <div className="  content-center  justify-center ">
    <img src={HAIRFALL} className="h-2% w-14" />
  </div>
  <div className="pl-3 content-center  justify-center ">
    <p>Hairfall</p>
  </div>
</div>
</button>
<button>
<div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
  <div className="  content-center  justify-center ">
    <img src={Kidney} className="h-2% w-14" />
  </div>
  <div className="pl-3 content-center  justify-center ">
    <p>Kidney</p>
  </div>
</div>
</button>
<button>
<div className=" flex border pt-2 pb-2 pl-10 pr-10 rounded">
  <div className="  content-center  justify-center ">
    <img src={HORMONE} className="h-2% w-14" />
  </div>
  <div className="pl-3 content-center  justify-center ">
    <p>Harmone</p>
  </div>
</div>
</button>
</div>
</div>
</>
    

  );
}
