
// import React from "react";
// import "./About.css"; // ✅ External CSS
// import Box from "@mui/material/Box";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Form from "./Form/Form";
// import CallButton from "../../CallButton/callButton";

// import PriceCard from "../../PriceCard/PriceCard";

// const About = () => {
//    const isMobileView =useMediaQuery("(max-width:570px)")
//   return (
//     <>
//       <div className="header">
//         {/* ⬇️ Logo and heading inside the wave */}
//         <Box  sx={{ marginLeft:isMobileView ? "-600px" : undefined }}>
//         <div className="inner-header flex" >
//           <svg
//             version="1.1"
//             className="logo"
//             baseProfile="tiny"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             x="0px"
//             y="0px"
//             viewBox="0 0 500 500"
//             xmlSpace="preserve"
//           >
//             {/* ✅ SVG Path Logo */}
//             <path fill="#FFFFFF" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M57,283" />
//             <g>
//               <path
//                 fill="#fff"
//                 d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4
//                 c137.7,0,249.4-111.7,249.4-249.4
//                 C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
//                 c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6
//                 l1.8-39.7		
//                 c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166
//                 c-12.6,16-45.4,68.2-31.2,96.2
//                 c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"
//               />
//             </g>
//           </svg>

//           {/* ✅ Wave Heading */}
//           <h1>Simple CSS Waves</h1>
//           <div className="shadow" >
//             <Form/>
           
//           </div>
//         </div>
//          </Box>
//         {/* ⬇️ SVG wave graphic animation */}
//         <div>
//           <svg
//             className="waves"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 24 150 28"
//             preserveAspectRatio="none"
//             shapeRendering="auto"
//           >
//             <defs>
//               <path
//                 id="gentle-wave"
//                 d="M-160 44c30 0 58-18 88-18s 58 18 88 18 
//                 58-18 88-18 58 18 88 18 v44h-352z"
//               />
//             </defs>
//             <g className="parallax">
//               <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.6)" />
//               <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
//               <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.4)" />
//               <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
//             </g>
//           </svg>
//         </div>
//       </div>
//      <Box><CallButton/></Box> 
      
//       <Box sx={{ pb: 8 }}><PriceCard/></Box>
      
//     </>
//   );
// };

// export default About;


import React, { useState } from "react";
import "./About.css"; // ✅ External CSS
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Form from "./Form/Form";
import CallButton from "../../CallButton/callButton";
import PriceCard from "../../PriceCard/PriceCard";

// ✅ NEW: Import Pagination
import Pagination from "../../Pagination/Pagination";

// ✅ NEW: Mock data to simulate paginated content
const mockData = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const About = () => {
  const isMobileView = useMediaQuery("(max-width:570px)");

  // ✅ NEW: Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className="header">
        {/* ⬇️ Logo and heading inside the wave */}
        <Box sx={{ marginLeft: isMobileView ? "-600px" : undefined }}>
          <div className="inner-header flex">
            {/* ✅ SVG Logo */}
            <svg
              version="1.1"
              className="logo"
              baseProfile="tiny"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              xmlSpace="preserve"
            >
              <path fill="#FFFFFF" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M57,283" />
              <g>
                <path
                  fill="#fff"
                  d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4
                  c137.7,0,249.4-111.7,249.4-249.4
                  C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
                  c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6
                  l1.8-39.7		
                  c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166
                  c-12.6,16-45.4,68.2-31.2,96.2
                  c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"
                />
              </g>
            </svg>

            {/* ✅ Wave Heading */}
            <h1>Simple CSS Waves</h1>
            <div className="shadow">
              <Form />
            </div>
          </div>
        </Box>

        {/* ⬇️ SVG wave graphic animation */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 
                58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.6)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.4)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <Box><CallButton /></Box>
      <Box sx={{ pb: 8 }}><PriceCard /></Box>

      {/* ✅ MOCK DATA LIST WITH PAGINATION AT BOTTOM */}
      <div style={{ padding: "20px" }}>
        <h2>Paginated Mock Data</h2>
        <ul>
          {currentItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={mockData.length}
          paginate={setCurrentPage}
        />
      </div>
    </>
  );
};

export default About;
