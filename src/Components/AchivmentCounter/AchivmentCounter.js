import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import "./AchivmentCounter.css";

const counters = [
  { icon: "/AchivmentCounterIcon/office-worker.png", target: 1500, title: "Happy Customers" },
  { icon: "/AchivmentCounterIcon/water-filter.png", target: 5000, title: "Purifiers Installed" },
  { icon: "/AchivmentCounterIcon/easy-installation.png", target: 3000, title: "Repairs Completed" },
  { icon: "/AchivmentCounterIcon/10-years.png", target: 10, title: "Years Experience" },
];

const AchievementCounter = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentRef = containerRef.current; // ✅ FIX: cache ref to avoid stale value in cleanup

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          startCounting();
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [started]);

  const startCounting = () => {
    const duration = 3000; // 3 seconds
    const frameRate = 30;
    const totalFrames = (duration / 1000) * frameRate;

    counters.forEach((counter, i) => {
      let frame = 0;
      const increment = counter.target / totalFrames;

      const interval = setInterval(() => {
        frame++;
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = Math.min(Math.round(frame * increment), counter.target);
          return updated;
        });

        if (frame >= totalFrames) {
          clearInterval(interval);
        }
      }, 1000 / frameRate);
    });
  };

  return (
    <Box
      ref={containerRef}
      className="Achievement-Container"
      sx={{
        backgroundImage: "url('/AchivmentCounterIcon/wat.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box className="Achievement-Header">
        <Typography className="Achievement-Title">
          Why choose SA Aqua for water filter installation and repair in Pune
        </Typography>
        <Typography className="Achievement-Subtitle">
          Some key reasons why we are the most preferred professional partners
        </Typography>
      </Box>

      <Box className="AchivmentBox">
        {counters.map((counter, i) => (
          <Box key={i} className="SubAchivment">
            <img
              src={counter.icon}
              alt={counter.title}
              className="AchivmentIcon"
            />
            <Typography className="Achivment-Count">
              {counts[i]}+
            </Typography>
            <Typography className="Achivment-CardTitle">
              {counter.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AchievementCounter;
