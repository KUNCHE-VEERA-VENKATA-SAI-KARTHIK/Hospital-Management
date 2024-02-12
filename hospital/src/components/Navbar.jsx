import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item px-6">
            <img
              className="max-h-10  justify-items-start rounded-2xl"
              src={c2}
              alt="no image foound"
            />
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pharmacy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lab tests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Reports</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
