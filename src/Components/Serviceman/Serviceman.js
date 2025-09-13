import React from "react";
import { Box, Typography } from "@mui/material";
import "./Serviceman.css";

const Serviceman = () => {
    return (
        <>
            <Box className="mainBox">
                <Box>
                    <img src="/asset/plumber.jpg" alt="Plumber" className="plumber" />
                </Box>
                <Box className="ExpertSuggestion">
                    <Box className="card">
                        <Box className="top-row">
                            <img src="/cardIcon/salary.png" alt="Afordable" className="afford" />

                            <Typography variant="h6" className="heading-container">
                                AFFORDABLE PRICING
                            </Typography>
                        </Box>
                        <Typography className="box-content">Get budget-friendly water purifier repair and installation in Pune. We ensure clean and safe drinking water for every household without extra costs.</Typography>
                    </Box>

                    <Box className="card">
                        <Box className="top-row">
                            <img src="/cardIcon/mechanic.png" alt="Expert Technicians" className="afford" />
                            <Typography variant="h6" className="heading-container">
                                EXPERT TECHNICIANS
                            </Typography>
                        </Box>
                        <Typography className="box-content">
                           Our expert and certified technicians in Pune offer reliable water purifier repair, maintenance, and installation services to keep your water healthy and pure.
                        </Typography>
                    </Box>


                    <Box className="card">
                        <Box className="top-row">
                            <img src="/cardIcon/repair-time.png" alt="Fast Service" className="afford" />
                            <Typography variant="h6" className="heading-container">
                                FASTEST SERVICESSSS
                            </Typography>
                        </Box>
                        <Typography className="box-content">
                           We provide fast and reliable water purifier repair and installation services across Pune, ensuring safe drinking water with minimal wait time.
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Serviceman;
