import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Posts from './Posts';
import Pricing from './Pricing'
import './main.css'
import Mainform from './Mainform'
import Promise from './Promise'
import classNames from 'classnames'
import Contactform from './Contactform'

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));


const mainFeaturedPost = {
  title: 'Book With Us',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://cdn.pixabay.com/photo/2014/06/04/16/36/car-repair-362150_1280.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function MainFeaturedPost() {
  const classes = useStyles();
  const btn1 = classNames('btn','btn-warning','btn-lg','btn-shadow')
  return (
    <div>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" style={{color:"yellow", radius:"2px solid black",textShadow:"0px 30px 20px "}} gutterBottom>
              <button className ={btn1}>{mainFeaturedPost.title}</button>
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {mainFeaturedPost.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {mainFeaturedPost.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    
    </Paper>
    
    <Posts/>
    <Promise />
    <Pricing />
    <Mainform/>
    </div>
  );
}

// MainFeaturedPost.propTypes = {
//   post: PropTypes.object,
// };