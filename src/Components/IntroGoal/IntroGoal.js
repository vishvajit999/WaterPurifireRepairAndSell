import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./IntroGoal.css";

const IntroGoal = () => {
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
    <Box className="introgoal-container">
      <Box
        className="introgoal-image-wrapper fade-in-right"
        ref={imageRef}
      >
        <Box className="introgoal-border-box"></Box>
        <Box className="introgoal-internal-block">
          <img src="/asset/WaterFilter.jpeg" alt="WaterFilter" />
        </Box>
      </Box>

      <Box className="introgoal-text">
        <Typography
          variant="subtitle2"
          className="introgoal-history-text fade-in-left"
          ref={el => textRefs.current[0] = el}
        >
          OUR VISION
        </Typography>
        <Typography
          variant="h4"
          className="introgoal-title fade-in-left"
          ref={el => textRefs.current[1] = el}
        >
          PURE WATER, HEALTHY LIFE
        </Typography>
        <Typography
          variant="body1"
          className="introgoal-description fade-in-left"
          ref={el => textRefs.current[2] = el}
        >
          SA Aqua was founded with a single vision: to make clean drinking water a reality for every home and workplace.
          We deliver advanced purifiers and expert service with a commitment to your health.
        </Typography>
        <Typography
          variant="body2"
          className="introgoal-details fade-in-left"
          ref={el => textRefs.current[3] = el}
        >
          Our skilled team ensures your purifier runs at peak performance, saving you money and delivering pure water every day.
          Trust us to keep your family safe with every sip.
        </Typography>
        <Typography
          variant="body1"
          className="introgoal-description fade-in-left"
          ref={el => textRefs.current[4] = el}
        >
          We believe clean water is a right, not a privilege.
          That’s why we stand by you with dependable products, dedicated support, and a promise of purity for years to come.
        </Typography>
        <Button
          variant="outlined"
          className="introgoal-find-more-btn fade-in-left"
          ref={el => textRefs.current[5] = el}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
};

export default IntroGoal;
