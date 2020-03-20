import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'; 
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './wof.css'

const style = {

    paper:{
        backgroundColor:'purple',
        boxShadow:'0px 10px 20px black',
        fontFamily:'monospace',
        color:'white',
        textAlign: 'justify',
    }
  
}
export class Wof extends Component {
    render() {
        return (
              
            <div>
                 <h1 style={{ color:'black',paddingTop:'20px',fontFamily:"monospace", textDecoration: "underline",
   textDecorationColor:'red', textShadow:"10px 20px  30px black"}}>Warrent Of Fitness</h1>
              <div className='normal'>
               <div className='box1'>
               <Paper  style={style.paper}>
               <Typography paragraph style={{padding:'10px'}}>
         Having a valid Warrant of Fitness is a legal requirement for driving on New Zealand's roads, and it is your responsibility as the vehicle owner to ensure your Warrant is up to date. 

Cambridge Automotive offers prompt Warrant of Fitness inspections for all makes and models with a reliable service designed to get you back out on the road quicker. We're open from 8am to 5pm so you can get your WoF done on the way to or from work or leave it with us and head on to the train station before picking your car up later.

 To make it even easier for you to keep your vehicle legal and safe on the road, you can become one of our regular customers and we'll email you a reminder when your next WoF is due.

Get your WoF inspection done by a reliable team of mechanics - book it with Cambridge Automotive today.
         </Typography>
         </Paper>
                   
                    </div>
               <div className='box2' style={{backgroundColor:'transparent'}}> 
               <Paper  >
               <img  height ="290px" width="280px"  style={{backgroundColor:"transparent"}} src="https://www.nzherald.co.nz/resizer/L1vFK6pLfS5MFtL6Iv1c6ePuUik=/360x384/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/G2UW577YVRDP7GAHMG3J3DWOVI.jpg"/>
              
               </Paper>
               </div>
              </div>
              <Button  variant="contained"
        color="primary" style={{marginTop:'50px'} } className='icon'> Get A Warrant of Fitness</Button>


              </div>






//                 <div className='container'>
//            {/* <Container> */}
//                {/* <h1 style={{ color:'black',paddingTop:'20px',fontFamily:"monospace", textDecoration: "underline",
//   textDecorationColor:'red', textShadow:"10px 20px  30px black"}}>Warrent Of Fitness</h1> */}
//                 {/* <div style={{paddingTop:'40px'}}> */}
//                     <div className= "block1">
//                         <div className="Wofinfo">
                        
//           <Typography paragraph style={{padding:'10px'}}>
//           Having a valid Warrant of Fitness is a legal requirement for driving on New Zealand's roads, and it is your responsibility as the vehicle owner to ensure your Warrant is up to date. 

// Cambridge Automotive offers prompt Warrant of Fitness inspections for all makes and models with a reliable service designed to get you back out on the road quicker. We're open from 8am to 5pm so you can get your WoF done on the way to or from work or leave it with us and head on to the train station before picking your car up later.

// To make it even easier for you to keep your vehicle legal and safe on the road, you can become one of our regular customers and we'll email you a reminder when your next WoF is due.

// Get your WoF inspection done by a reliable team of mechanics - book it with Cambridge Automotive today.
//         </Typography>
          
//                         </div>
                       
//                     {/* </div> */}
                    
//                 {/* <Grid container spacing={3} style={{display:'flex',flexFlow:'row wrap'}}>
//                 <Grid item xs={6}>
//           <Paper  style={style.paper}>
//           <Typography paragraph style={{padding:'10px'}}>
//           Having a valid Warrant of Fitness is a legal requirement for driving on New Zealand's roads, and it is your responsibility as the vehicle owner to ensure your Warrant is up to date. 

// Cambridge Automotive offers prompt Warrant of Fitness inspections for all makes and models with a reliable service designed to get you back out on the road quicker. We're open from 8am to 5pm so you can get your WoF done on the way to or from work or leave it with us and head on to the train station before picking your car up later.

// To make it even easier for you to keep your vehicle legal and safe on the road, you can become one of our regular customers and we'll email you a reminder when your next WoF is due.

// Get your WoF inspection done by a reliable team of mechanics - book it with Cambridge Automotive today.
//         </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper >
//         
//         </Paper>
//         </Grid>
//                 </Grid> */}
                
//        
          
       
       
//                 </div>
                
//            {/* </Container> */}
//            </div>
        )
    }
}

export default Wof
