// import "../Navbar/Navbar.css";
// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import useMediaQuery from "@mui/material/useMediaQuery";

// const drawerWidth = 250;

// const navItems = [
//   { label: 'Home', path: '/Home' },
//   { label: 'Contact', path: '/Contact' },
//   { label: 'About', path: '/About' }
// ];

// export default function DrawerAppBar(props) {
//   const { window: windowProp } = props; // renamed to avoid conflict with global window
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const isMobileView = useMediaQuery("(max-width:500px)");

//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(prevState => !prevState);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);  // global window here
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Initial check in case user refreshes mid-scroll
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // no dependencies needed here

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex', maxWidth: isMobileView ? "100px" : undefined }}>
//       <CssBaseline />
//      <AppBar
//   component="nav"
//   elevation={0}
//   sx={{
//     height: 64,
//     background: isScrolled
//       ? 'linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)'
//       : 'transparent',
//     boxShadow: 'none',
//     transition: 'background 0.3s ease',
//   }}
// >

//         <Toolbar sx={{ minHeight: 64 }}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item, index) => (
//               <Button
//                 component={Link}
//                 to={item.path}
//                 key={index}
//                 sx={{ color: '#fff' }}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth
//             }
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }import "../Navbar/Navbar.css";
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const drawerWidth = 250;

const navItems = [
  { label: 'Home', path: '/Home' },
  { label: 'Contact', path: '/Contact' },
  { label: 'About', path: '/About' },
  {label:'Log In' , path:'/login'}
];

export default function DrawerAppBar(props) {
  const { window: windowProp } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show background on any scroll
      setIsScrolled(currentScrollY > 0);

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          height: 64,
          background: isScrolled
            ? 'linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)'
            : 'transparent',
          boxShadow: 'none',
          transition: 'background 0.3s ease, transform 0.3s ease',
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <Toolbar sx={{ minHeight: 64 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
            <img src="./asset/Logo.png" alt="logo" className="logo" />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button
                component={Link}
                to={item.path}
                key={index}
                sx={{ color: '#fff' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
