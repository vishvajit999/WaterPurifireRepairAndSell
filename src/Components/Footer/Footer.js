import { Box, Typography, Link, Stack } from "@mui/material";
import React from "react";
import "./Footer.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer>

      <Box className="footer-container">
        <Box className="footer-box">
          {/* === ABOUT US === */}
          <Box className="footerContent">
            <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              At SA Services, we specialize in trusted water purifier installation,
              repair, and annual maintenance across Pune. With a team of skilled
              technicians, we ensure safe, clean drinking water for your family.
              Serving top brands with quick doorstep service and affordable prices,
              we’re your reliable partner for pure water solutions.
            </Typography>
          </Box>

          {/* === MAIN MENU === */}
          <Box className="footerContent">
            <Stack direction="column" spacing={0} alignItems="center">
              <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
                Main Menu
              </Typography>
              <Stack
                direction="column"
                spacing={1}
                alignItems="flex-start"
                flexWrap="wrap"
              >
                <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#00BFFF' } }}>
                  Home
                </Link>
                <Link href="/about" underline="none" color="inherit" sx={{ '&:hover': { color: '#00BFFF' } }}>
                  About
                </Link>
                <Link href="/services" underline="none" color="inherit" sx={{ '&:hover': { color: '#00BFFF' } }}>
                  Services
                </Link>
                <Link href="/contact" underline="none" color="inherit" sx={{ '&:hover': { color: '#00BFFF' } }}>
                  Contact
                </Link>
                <Link href="/privacy" underline="none" color="inherit" sx={{ '&:hover': { color: '#00BFFF' } }}>
                  FAQ
                </Link>
              </Stack>
            </Stack>
          </Box>

          {/* === CONTACT US === */}
          <Box className="footerContent">
            <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
              Contact Us
            </Typography>
            <Box>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2" className="para">
                    Office No. 12, 2nd Floor, ABC Business Center,
                    Narhe Road, Narhe, Pune, Maharashtra 411041 India
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <PhoneIcon fontSize="small" />
                  <Stack direction="column" spacing={0.5}>
                    <Typography variant="body2" className="white-text">+91 9096209951</Typography>
                    <Typography variant="body2" className="white-text">+91 8830531184</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <EmailIcon fontSize="small" />
                  <Stack direction="column" spacing={0.5}>
                    <Typography variant="body2" className="white-text">info@sagar.com</Typography>
                    <Typography variant="body2" className="white-text">service@sagar.com</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* === MAP === */}
          <Box className="footerContent">
            <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
              Map
            </Typography>
            <Box >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266171.99353594455!2d73.73992005331549!3d18.460842835384092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295418e1a339b%3A0x422d603d4e316304!2sNavale%20Brg%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1749904078756!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer-map"
              ></iframe>
            </Box>
            <Box>
              <Typography sx={{ textAlign: 'justify' }}>
                Near Navale Bridge SA_Aqua, Narhe, Pune 411041, Maharashtra, India
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ✅ NEW: Payment + Book Service + Social with links */}
      <Box className="bottumText2">
        <Box className="footer-bottom-content">
          {/* Left */}
          <Box className="footer-left">
            <Typography variant="body2" sx={{ mr: 1 }}>We accept:</Typography>
            <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer">
              <img src="/payment-icons/Gpay.png" alt="GPay" className="footer-icon bagroundGpay" />
            </a>
            <a href="https://www.mastercard.com/" target="_blank" rel="noopener noreferrer">
              <img src="/payment-icons/mastercard.png" alt="MasterCard" className="footer-icon" />
            </a>
            <a href="https://www.rupay.co.in/" target="_blank" rel="noopener noreferrer">
              <img src="/payment-icons/rupycard.png" alt="RuPay" className="footer-icon" />
            </a>
            <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
              <img src="/payment-icons/visacard.png" alt="Visa" className="footer-icon" />
            </a>
          </Box>



          {/* Right */}
          <Box className="footer-right">
            <Typography variant="body2" sx={{ mr: 1 }}>Follow us:</Typography>
            <a href="https://www.facebook.com//YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="/social-icons/Facebook.png" alt="Facebook" className="footer-icon social-icon" />
            </a>
            <a href="https://www.instagram.com//YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="/social-icons/Instagram.png" alt="Instagram" className="footer-icon social-icon" />
            </a>
            <a href="https://twitter.com//YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="/social-icons/Twitter.png" alt="Twitter" className="footer-icon social-icon" />
            </a>
           
            <a href="https://wa.me/919767200262?text=Hello%20I%20am%20interested%20in%20your%20products" target="_blank" rel="noopener noreferrer">
              <img src="/social-icons/wattsapp.png" alt="WhatsApp" className="footer-icon social-icon" />
            </a>

          </Box>
        </Box>
      </Box>

      {/* Bottom links and copyright */}
      <Box className="bottumText">
        <Box className="bottomText">
          <Box className="footer-links">
            <a href="https://en.wikipedia.org/wiki/Terms_of_service">Terms and Conditions</a>
            <span>|</span>
            <a href="https://en.wikipedia.org/wiki/Security">Security</a>
            <span>|</span>
            <a href="https://en.wikipedia.org/wiki/Refund_policy">Cancellation & Refund Policy</a>
            <span>|</span>
            <a href="https://en.wikipedia.org/wiki/Payment">Payment Policy</a>
          </Box>
          <Typography variant="body2" className="copyright-text">
            © 2015–{new Date().getFullYear()} www.sa.com. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
