// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';

// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Pages/Home';
// import About from './Components/Pages/About';

// import Footer from './Components/Footer/Footer';
// import Serviceman from './Components/Serviceman/Serviceman';
// import ContactUs from './Components/ContactUs/ContactUs';
// import TestimonialsCarousel from './Components/TestimonialsCarousel/TestimonialsCarousel';
// import Introduction from './Components/Introduction/Introduction';
// import AchivmentCounter from './Components/AchivmentCounter/AchivmentCounter';
// import IntroGoal from './Components/IntroGoal/IntroGoal';
// import BenefitOfWaterPurifier from './Components/BenifitOfWaterPurifire/BenifitOfWaterPurifire';
// import LoginUser from './Components/LoginUser/LoginUser';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <MainApp isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
//     </Router>
//   );
// }

// function MainApp({ isLoggedIn, onLogin }) {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";

//   const showFullSite = isLoggedIn || location.pathname === "/skip";

//   return (
//     <>
//       {/* Show Navbar only when full site should be visible and not on /login */}
//       {showFullSite && !isLoginPage && <Navbar />}

//       <Routes>
//         {/* Login Route */}
//         <Route path="/login" element={<LoginUser onLogin={onLogin} />} />

//         {/* Skip login simulation */}
//         <Route path="/skip" element={<Navigate to="/" />} />

//         {/* Show full site only if logged in or skipped */}
//         {showFullSite ? (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/Home" element={<Home />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Contact" element={<ContactUs />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </>
//         ) : (
//           // Block everything else until logged in
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>

//       {/* Bottom sections only if logged in or skipped and not on login page */}
//       {showFullSite && !isLoginPage && (
//         <>
//           <Introduction />
//           <IntroGoal />
//           <BenefitOfWaterPurifier />
//           <TestimonialsCarousel />
//           <ContactUs />
//           <AchivmentCounter />
//           <Serviceman />
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }

// export default App;
// App.js
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Footer from './Components/Footer/Footer';
import Serviceman from './Components/Serviceman/Serviceman';
import ContactUs from './Components/ContactUs/ContactUs';
import TestimonialsCarousel from './Components/TestimonialsCarousel/TestimonialsCarousel';
import Introduction from './Components/Introduction/Introduction';
import AchivmentCounter from './Components/AchivmentCounter/AchivmentCounter';
import IntroGoal from './Components/IntroGoal/IntroGoal';
import BenefitOfWaterPurifier from './Components/BenifitOfWaterPurifire/BenifitOfWaterPurifire';
import LoginUser from './Components/LoginUser/LoginUser';

// ✅ ✅ ✅ ADDED PAGINATION PAGE IMPORT
import PaginationPage from './Components/Pagination/PaginationPage'; // ✅ Correct path

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <MainApp isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
    </Router>
  );
}

function MainApp({ isLoggedIn, onLogin }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const showFullSite = isLoggedIn || location.pathname === "/skip";

  return (
    <>
      {/* ✅ Show Navbar only when logged in or skipped and not on login page */}
      {showFullSite && !isLoginPage && <Navbar />}

      <Routes>
        {/* 🔐 Login route */}
        <Route path="/login" element={<LoginUser onLogin={onLogin} />} />

        {/* 🎯 Simulate skipping login */}
        <Route path="/skip" element={<Navigate to="/" />} />

        {/* 🌐 Public routes after login or skip */}
        {showFullSite ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<ContactUs />} />

            {/* ✅✅✅ NEW PAGINATION ROUTE ADDED */}
            <Route path="/pagination" element={<PaginationPage />} />

            {/* 🔁 Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} /> // 🔒 redirect if not logged in
        )}
      </Routes>

      {/* 📦 Show bottom sections only when logged in or skipped and not on login */}
      {showFullSite && !isLoginPage && (
        <>
          <Introduction />
          <IntroGoal />
          <BenefitOfWaterPurifier />
          <TestimonialsCarousel />
          <ContactUs />
          <AchivmentCounter />
          <Serviceman />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
