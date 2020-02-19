import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles';
import './main.css'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image'

const style = {
    bg:{
        backgroundColor:'white',
        minHeight:200,
    },
    root: {
        flexGrow: 1,
        marginTop:200,
      },
      paper: {    
        textAlign: 'center',
        
      },
      row1:{
        padding:30,
        display:'flex',
      },
      main:{
        marginTop:10,
        // paddingBottom:30
        
      },
      box:{
        textAlign:'center',
        padding:20,
        display:'flex',
       
      },
      image3:{
        textAlign:'bottom',
        padding:10,
        postion:'bottom'
      },
      heading:{
        fontSize:15,
        Color:'Black',
        textAlign:'Center',
        backgroundColor:'silver',
        padding:20
      },
        col1:{
          width:"50%",

        }
}

export class Middlearea extends Component {
    render() {
        return (
            <div >
                <Container fluid  style={style.main} >
                   <Row  >
                     <Col><u> <h4 style={{padding:10}}>why Join us</h4></u></Col>
                   </Row>
                   <Row style={style.row1}>
                     <Col style={style.box}> 
                     <div style={{width:"50%",padding:20}} >
                       <h4>Expert Mechanics</h4>
                       <p style={{textAlign: "justify"}}>At Midas we’re interested in proactively looking after your car, van, SUV or ute, so that you can enjoy years of trouble free motoring. Our various vehicle service packages are designed to stay on top of the key maintenance areas of your vehicle, without any over-the-top extrase</p>
                     </div>
                     <div style={{width:"50%",padding:20}} >
                       <h4 >Expert Mechanics</h4>
                       <p style={{textAlign: "justify"}}>At Midas we’re interested in proactively looking after your car, van, SUV or ute, so that you can enjoy years of trouble free motoring. Our various vehicle service packages are designed to stay on top of the key maintenance areas of your vehicle, without any over-the-top extras</p>
                     </div>
                     <div style={{width:"50%",padding:20}} >
                       <h4 >Expert Mechanics</h4>
                       <p style={{textAlign: "justify"}}>At Midas we’re interested in proactively looking after your car, van, SUV or ute, so that you can enjoy years of trouble free motoring. Our various vehicle service packages are designed to stay on top of the key maintenance areas of your vehicle, without any over-the-top extras</p>
                     </div>
                      </Col>
                      <Col>
                               <div style={style.image3} >
                               <Image src="https://www.tomsautos.co.nz/bg-hero-repair-930px-x-250px.png"  alt="First slide" fluid />
                              </div>
                      </Col>
                   </Row>
                   <hr/>
                </Container>
            
            </div>
        )
    }
}

export default Middlearea
