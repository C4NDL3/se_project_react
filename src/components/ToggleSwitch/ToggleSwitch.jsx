import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

const ToggleSwitch = () => {
  // const [currentTempUnit, handleToggleSwitchChange] = useState("C");

  // const handleChange = (e) => {
  //   if (currentTempUnit === "C") handleToggleSwitchChange("F");
  //   if (currentTempUnit === "F") handleToggleSwitchChange("C");
  // };

  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );
  console.log(currentTempUnit);
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};
// import currentTempUnitContext from "../../contexts/CurrentTempUnitContext";

// const ToggleSwitch = () => {
//   const { currentTempUnit, handleToggleSwitchChange } = useContext(
//     currentTempUnitContext
//   );

//   return (
//     <label className="switch">
//       <input
//         type="checkbox"
//         className="switch__box"
//         onChange={handleToggleSwitchChange}
//       />
//       <span
//         className={
//           currentTempUnit === "F"
//             ? "switch__slider switch__slider-F"
//             : "switch__slider switch__slider-C"
//         }
//       ></span>
//       <p
//         className={`switch__temp-F ${
//           currentTempUnit === "F" && "switch__active"
//         }`}
//       >
//         F
//       </p>
//       <p
//         className={`switch__temp-C ${
//           currentTempUnit === "C" && "switch__active"
//         }`}
//       >
//         C
//       </p>
//     </label>
//   );
// };

// export default ToggleSwitch;
export default ToggleSwitch;
