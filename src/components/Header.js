import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './main.css';
import SVG from '../Svg'
import SVG2  from './Svg2'



const sections = [
    { title: 'Home', url: '/',MainTitle:'SparkleAutoServices'},
    { title: 'Services', url: '/user' },
    { title: 'Warrent of Fitness', url: '/recent' },
    { title: 'Book In Your Vehicle', url: '/createee',MainTitle:'SparkleAutoServices'},
    // { title: 'Make An Inquiry', url: '/Inquiry' },
  ];

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  animation:{
    animation: 'float 6s ease-in-out infinite',
  }
}));

export default function Header() {
  const classes = useStyles(); 
 
  return (
    <React.Fragment>
      
      <Toolbar className={classes.toolbar} style={{backgroundColor:"white",borderBottom:"1px solid purple",boxShadow:'0 5px 10px purple' }}>
        <Button size="small" className="border red">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
      
      <span className="maintitile"> 
      <SVG2/>
       </span>
         {sections[0].MainTitle}
          {/* <car>
             */}




          {/* </car> */}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" className="border">
          sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
      {/* <SVG/> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};