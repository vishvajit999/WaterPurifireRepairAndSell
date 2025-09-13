import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TestimonialsCarousel.css';
import data from '../../testimonials.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton className="arrow prev-arrow" onClick={onClick}>
    <ArrowBackIosNewIcon />
  </IconButton>
);

// ✅ Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton className="arrow next-arrow" onClick={onClick}>
    <ArrowForwardIosIcon />
  </IconButton>
);

const TestimonialsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box className="carousel-container">
      <Box className="slider-wrapper">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Card 
              key={item.id} 
              className={`testimonial-card ${index % 2 === 0 ? 'blue-card' : 'purple-card'}`}
//    white card             sx={{
//     background: 'transparent',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' // ✅ original shadow
    
//   }}
 sx={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/second.jpeg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    height: '240px',
  }}
            >
              <CardContent className="card-content">
                {/* ✅ Top Row: Avatar + Name */}
                <Box className="top-row">
                  <Box className="avatar-placeholder">
                    <i className="fa fa-user"></i>
                  </Box>
                  <Typography variant="h6" className="client-name">{item.name}</Typography>
                </Box>

                {/* ✅ Review */}
                <Typography variant="body2" className="review-text">
                  {item.review}
                </Typography>

                {/* ✅ Bottom Row: Location left, Stars right */}
                <Box className="bottom-row">
                  <Typography variant="subtitle2" className="location">{item.designation}</Typography>
                  <Box className="rating">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <StarIcon key={i} className="star" />
                    ))}
                  </Box>
                </Box>

              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialsCarousel;
