import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!form.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!form.message) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <Box className="contact-container">
      <Grid container spacing={4}>
        {/* Left Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="contact-title">
            Contact Us
          </Typography>
          <Typography variant="body1" className="contact-description">
            Feel free to reach out for any inquiries or feedback. We are here to help!
          </Typography>

          <form onSubmit={handleSubmit} className="contact-form">
            <TextField
              label="Your Name"
              name="name"
              fullWidth
              value={form.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <TextField
              label="Your Email"
              name="email"
              fullWidth
              value={form.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Your Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              value={form.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
            />
            <Button variant="contained" type="submit" fullWidth className="contact-button">
              Send Message
            </Button>
          </form>

          <Box className="contact-icons">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fa fa-twitter fa-2x"></i>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Google">
              <i className="fa fa-google fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </Box>
        </Grid>

        {/* Right Contact Info */}
        <Grid item xs={12} md={6}>
          <Box className="vertical-contact-box">
            <Typography variant="h6" className="contact-heading">Details</Typography>

            <Typography className="contact-line">
              <i className="fa fa-user contact-icon" aria-hidden="true"></i>
              <strong>Name:</strong>Sagar Nanavare
            </Typography>

            <Typography className="contact-line">
              <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
              <div>
                <strong>Mobile:</strong> 996209951<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8830531840
              </div>
            </Typography>

            <Typography className="contact-line">
              <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
              <div>
                <strong>Email:</strong> &nbsp;sagarannavare999@gmail.com<br />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;infosagar45@gmail.com
              </div>
            </Typography>

            <Typography className="contact-line">
              <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
              <div>
                <strong>Address:</strong> Narhe, Pune - 411041<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maharashtra, India
              </div>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
