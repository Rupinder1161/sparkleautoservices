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
// import './post.css'
import IosSettingsOutline from 'react-ionicons/lib/IosSettingsOutline'
 import IosConstruct from 'react-ionicons/lib/IosConstruct'

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
        'Sparkle Auto Services is a Full service auto repair shop.Our mobile mechanics service all types of cars and trucks, offering everything from oil changes and tune ups to brake jobs and no-starts. Our certified mechanics can perform most jobs right in your driveway or at your parking spot at work giving you the freedom to spend your time on more important things.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'Just tell us what maintenance and auto repair services you need and we will send you a fixed quote. Do not know what is wrong? Not a problem, one of our mobile mechanics will come out, do a diagnostic visit and create a quote for you. We focus on no hassle pricing and convenience. The price we quote you is the price we charge.',
      image: 'https://source.unsplash.com/random', 
      imageText: 'Image Text',
    },
  ];
 

  const flex =  {
    mainBox:{
      display:"flex",
      flexFlow: 'row wrap',
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      
    },
    box1:{
      width:"600px",
     margin:'20px'
    },
    // box3:{
    //   width:"70px",
    //  backgroundColor: 'red',
    //  margin:'40px',
    //  justifyContent:'center'
    // }
    
    box2:{
      width:"600px",
     
     margin:'20px'
    }
  }
export default function Posts() {
  const classes = useStyles();

  return (
    <div style={flex.mainBox} >
      <div style={flex.box1}>

      <CardActionArea  >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>  

            <Typography component="h2" variant="h5">
            <IosSettingsOutline fontSize="60px" color="#FFA500" rotate={true}/>
              </Typography>
             

              <Typography variant="subtitle1"  style={{ textAlign: "justify"}} paragraph>
                {featuredPosts[0].description}
              </Typography>
              
            </CardContent>
          </div>
          
        </Card>
      </CardActionArea>
      </div>

     {/* <div style={flex.box3}><IosSettingsOutline fontSize="60px" color="#43853d" rotate={true}/></div> */}
      <div style={flex.box2}>
    
      <CardActionArea >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
            <Typography component="h2" variant="h5">
            <IosConstruct fontSize="60px" color="#FFA500" shake={true}/>
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {featuredPosts[1].description}
              </Typography>
             
            </CardContent>
          </div>
          
        </Card>
      </CardActionArea>
      </div>
      {/* <Grid container spacing={3}>
    <Grid item xs={6} md={6} style={classes.Card}>
      <CardActionArea  >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
             
              <Typography variant="subtitle1"  style={{ textAlign: "justify"}} paragraph>
                {featuredPosts[0].description}
              </Typography>
              
            </CardContent>
          </div>
          
        </Card>
      </CardActionArea>
      </Grid>
      <Grid item xs={6} md={6} style={classes.Card}>
    
      <CardActionArea >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
            
              <Typography variant="subtitle1" paragraph>
                {featuredPosts[1].description}
              </Typography>
             
            </CardContent>
          </div>
          
        </Card>
      </CardActionArea>
      </Grid>
      </Grid> */}
    </div>
  );
}

featuredPosts.propTypes = {
  post: PropTypes.object,
};