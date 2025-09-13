import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons';
import './LoginUser.css';
import { useNavigate } from 'react-router-dom'; // ✅ added for redirection

function LoginUser({ onLogin }) {
  const navigate = useNavigate(); // ✅ hook for redirection

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const getData = (e) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formValues.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters';
      isValid = false;
    }

    setErrors(newErrors);

    // ✅ Only allow specific email + password to login
    if (
      isValid &&
      formValues.email === 'vishvajitghadage999@gmail.com' &&
      formValues.password === 'Sag@1995'
    ) {
      onLogin();
      navigate('/'); // ✅ redirect to home page after successful login
    } else if (isValid) {
      alert('Invalid email or password');
    }
  };

  const skipLogin = () => {
    onLogin();           // ✅ update login state
    navigate('/skip');   // ✅ force redirect to full site
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Typography variant="h5" className="login-title">
        Sign In
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          className="login-input"
          fullWidth
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={formValues.email}
          onChange={getData}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />

        <TextField
          className="login-input"
          fullWidth
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formValues.password}
          onChange={getData}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="login-button"
          sx={{ mt: 2, mb: 1 }}
        >
          SIGN IN
        </Button>

        <Button
          type="button"
          onClick={skipLogin}
          fullWidth
          variant="outlined"
          className="login-button"
          sx={{ mb: 2 }}
        >
          Skip Login
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" className="social-text">
          Sign in with Social Media
        </Typography>

        <Box className="social-buttons">
          <GoogleLoginButton onClick={() => alert('Google sign in')} />
          <FacebookLoginButton onClick={() => alert('Facebook sign in')} />
        </Box>

        <Grid container justifyContent="center">
          <Typography variant="body2">
            Don't have an account? <Link href="#">Sign Up</Link>
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
}

export default LoginUser;
