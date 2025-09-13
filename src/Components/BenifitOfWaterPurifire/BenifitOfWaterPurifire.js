// // BenefitOfWaterPurifier.jsx
// import React from "react";
// import "./BenifitOfWaterPurifire.css";




// const BenefitOfWaterPurifier = () => {
//   return (
//     <div className="floating-container">
//       {/* ✅ Blurred background */}
//       <img
//         src="https://uploads.onecompiler.io/43ngk8s6r/43ngq2wdb/ok.jpeg"
//         alt="Blurred Background"
//         className="background-image"
//       />

//       {/* ✅ Content */}
//       <div className="floating-content">
//         {/* ✅ Left: Purifier + stairs */}
//         <div className="left-side">
//           <img
//             src="https://uploads.onecompiler.io/43ngk8s6r/43ngjs2fm/ro1.png"
//             alt="Water Purifier"
//             className="purifier-image"
//           />
//           <img
//             src="/mnt/data/edd37380-c516-492b-87bf-5d1e4b1aaa27.png"
//             alt="Stairs Platform"
//             className="stairs-image"
//           />
//         </div>

//         {/* ✅ Right: Benefits */}
//         <div className="right-side">
//           <h2>Benefits of a Water Purifier</h2>
//           <ul>
//             <li>Removes harmful contaminants</li>
//             <li>Improves taste and odor</li>
//             <li>Provides safe drinking water</li>
//             <li>Cost-effective compared to bottled water</li>
//             <li>Environmentally friendly</li>
//             <li>Convenient and easy to maintain</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitOfWaterPurifier;


// BenifitOfWaterPurifire.js
import React from "react";
import "./BenifitOfWaterPurifire.css";

const BenifitOfWaterPurifire = () => {
  return (
    <div className="floating-container">
      {/* ✅ Blurred background from public */}
      <img
        src="/BenifitOfWaterPurifire/Nature.jpeg"
        alt="Blurred Background"
        className="background-image"
      />

      {/* ✅ Content */}
      <div className="floating-content">
        {/* ✅ Left: Purifier + stairs */}
        <div className="left-side">
          <img
            src="/BenifitOfWaterPurifire/purifire.png"
            alt="Water Purifier"
            className="purifier-image"
          />
          <img
            src="/BenifitOfWaterPurifire/platform.png"
            alt="Stairs Platform"
            className="stairs-image"
          />
        </div>

        {/* ✅ Right: Benefits */}
        <div className="right-side">
          <h2>Benefits of a Water Purifier</h2>
          <ul>
            <li>Removes harmful contaminants</li>
            <li>Improves taste and odor</li>
            <li>Provides safe drinking water</li>
            <li>Cost-effective compared to bottled water</li>
            <li>Environmentally friendly</li>
            <li>Convenient and easy to maintain</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenifitOfWaterPurifire;
