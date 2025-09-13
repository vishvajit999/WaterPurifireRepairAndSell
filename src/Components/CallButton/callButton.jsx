// import React from 'react';
// import './CallButton.css'; // CSS file

// export default function CallButton({ onClick }) {
//   return (
//   <div className="call-button-container" onClick={onClick}>
//   <div className="pulse-ring"></div> {/* Wave 1 */}
//   <div className="pulse-ring"></div> {/* Wave 2 */}
//   <div className="pulse-ring"></div> {/* Optional Wave 3 */}
//   <div className="pulse-button">
//     <i className="fa fa-phone" aria-hidden="true"></i>
//   </div>
// </div>

//   );
// }

import React from 'react';
import './CallButton.css'; // Your CSS file

export default function CallButton() {
  return (
    <a href="tel:+919767200262"  className="call-button-link">
      <div className="call-button-container">
        <div className="pulse-ring"></div> {/* Wave 1 */}
        <div className="pulse-ring"></div> {/* Wave 2 */}
        <div className="pulse-ring"></div> {/* Optional Wave 3 */}
        <div className="pulse-button">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </div>
      </div>
    </a>
  );
}
