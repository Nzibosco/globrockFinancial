import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color = "transparent" id = "navbar">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title} id="logo">
//             GlobRock Financial
//           </Typography>
//           <Button color="inherit">Search</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }



export default function Navbar () {

  return (

    <nav className="navbar navbar-expand-lg navbar-light" id = "navbar">
  <a className="navbar-brand" href="#" id = "logo">GlobRock Financial</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" id = "nav-links">
      <a className="nav-link active" href="#" id="about">About</a>
      <a className="nav-link active" href="#" id="service">Services</a>
      <a className="nav-link active" href="#" id="contact">Contact Us</a>
    </div>
  </div>
</nav>
  )
}