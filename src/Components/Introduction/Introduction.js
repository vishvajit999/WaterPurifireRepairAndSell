import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./Introduction.css";

const Introduction = () => {
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    textRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box className="introduction-container">
      <Box className="introduction-text">
        <Typography
          variant="subtitle2"
          className="history-text fade-in-left"
          ref={el => textRefs.current[0] = el}
        >
          HISTORY
        </Typography>
        <Typography
          variant="h4"
          className="introduction-title fade-in-left"
          ref={el => textRefs.current[1] = el}
        >
          INTRODUCTION
        </Typography>
        <Typography
          variant="body1"
          className="introduction-description fade-in-left"
          ref={el => textRefs.current[2] = el}
        >
          Welcome to SA Aqua — your trusted partner for water purifier repair and sales.
          With a commitment to clean, safe drinking water, we deliver high-quality services
          and premium purification products tailored to every household and business.
        </Typography>
        <Typography
          variant="body2"
          className="introduction-details fade-in-left"
          ref={el => textRefs.current[3] = el}
        >
          We invite you to experience our expert repair services and explore our range
          of top-class water purifiers. Get clean and safe drinking water for your family
          and workplace.
        </Typography>
        <Typography
          variant="body1"
          className="introduction-description fade-in-left"
          ref={el => textRefs.current[4] = el}
        >
          At SA Aqua our goal is simple yet vital — to ensure every home and business
          has access to pure, safe, and healthy drinking water. We are dedicated to providing
          top-quality water purifiers, expert installation, and reliable repair services.
          Our commitment is to deliver peace of mind through clean water, exceptional
          customer care, and continuous innovation, so that our customers can focus
          on what truly matters: their health and well-being.
        </Typography>
        <Button
          variant="outlined"
          className="find-more-btn fade-in-left"
          ref={el => textRefs.current[5] = el}
        >
          FIND MORE
        </Button>
      </Box>

      <Box
        className="introduction-image-wrapper fade-in-right"
        ref={imageRef}
      >
        <Box className="border-box"></Box>
        <Box className="internal-block">
          <img src="/asset/WaterFilter.jpeg" alt="WaterFilter" />
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
