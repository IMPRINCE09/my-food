import React from "react";
import Logo from "./Image";

const Navabar = (item) => {
  return (
    <>
      <div className="Container">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="list">
            <li className="list-item">Home</li>
            <li className="list-item">Contact</li>
            <li className="list-item">Services</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navabar;
