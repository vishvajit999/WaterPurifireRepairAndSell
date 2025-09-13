import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import './Form.css'; // ✅ Your same CSS file

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    service: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        className="form-container"
        sx={{
          maxWidth: 230,
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* First and Last Name side by side */}
        <Box sx={{ display: 'flex', gap: 1, marginBottom: 0.3 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="outlined"
            size="small"
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fa fa-user" />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
            size="small"
            error={!!errors.lastName}
            helperText={errors.lastName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fa fa-user" />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
        </Box>

        {/* Mobile Number */}
        <TextField
          label="Mobile No"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          variant="outlined"
          size="small"
          inputProps={{ maxLength: 10 }}
          error={!!errors.mobile}
          helperText={errors.mobile}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i className="fa fa-phone" />
              </InputAdornment>
            ),
          }}
        />

        {/* Email */}
        <TextField
          label="Email ID"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          size="small"
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i className="fa fa-envelope" />
              </InputAdornment>
            ),
          }}
        />

        {/* Service Dropdown */}
        <FormControl fullWidth size="small" error={!!errors.service}>
          <InputLabel id="service-label">Services</InputLabel>
          <Select
            labelId="service-label"
            id="service"
            name="service"
            value={formData.service}
            label="Services"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <i className="fa fa-cogs" style={{ marginRight: 8 }} />
              </InputAdornment>
            }
            renderValue={(selected) => {
              if (!selected) {
                return <em>None</em>;
              }
              return selected;
            }}
            sx={{
              '& .MuiSelect-select': {
                paddingLeft: '32px',
              },
            }}
          >
            <MenuItem value="">
              <em>Other</em>
            </MenuItem>
            <MenuItem value="RO Installation">RO Installation</MenuItem>
            <MenuItem value="RO Repair Service">RO Repair Service</MenuItem>
            <MenuItem value="RO AMC Service">RO AMC Service</MenuItem>
          </Select>
          {errors.service && (
            <Box sx={{ color: 'error.main', fontSize: '0.75rem', mt: 0.5 }}>
              {errors.service}
            </Box>
          )}
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>

      <Divider sx={{ my: 2, borderColor: 'gray', width: '100%' }} />

      {/* ✅ Corrected icons for brands: use 'fab' */}
     <Box className="bottum">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <i className="fab fa-linkedin"></i>
  </a>
</Box>

    </>
  );
}
