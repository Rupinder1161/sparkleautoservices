import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection:'row'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
 

export default function Posts() {
  const classes = useStyles();

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <Grid container spacing={3}>
    <Grid item xs={6} md={6} style={classes.Card}>
      <CardActionArea component="a" href="#"  >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {featuredPosts[0].title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {featuredPosts[0].date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {featuredPosts[0].description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={featuredPosts.image} title={featuredPosts.imageTitle} />
          </Hidden> */}
        </Card>
      </CardActionArea>
      </Grid>
      <Grid item xs={6} md={6} style={classes.Card}>
    
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {featuredPosts[1].title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {featuredPosts[1].date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {featuredPosts[1].description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={featuredPosts.image} title={featuredPosts.imageTitle} />
          </Hidden> */}
        </Card>
      </CardActionArea>
      </Grid>
      </Grid>
    </div>
  );
}

featuredPosts.propTypes = {
  post: PropTypes.object,
};