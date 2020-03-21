import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import './mainform.css'
import MapIcon from '@material-ui/icons/Map';
import { Map } from 'google-maps-react';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import EmailIcon from '@material-ui/icons/Email';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';









const facebook = classNames('fa','fa-facebook')

export class Mainform extends Component {
  

    render() {
        
        
        const facebook = classNames('fa','fa-facebook')
        return (
           
          <footer class="footer-distributed">
 
          <div class="footer-left">
       
          <h3>Sparkle Auto<span>Services</span></h3>
       
          <p class="footer-links">
          <a href="#" style={{color:'yellow',paddingRight:"10px"}}>Oil change</a>
        
          <a href="#"  style={{color:'white',paddingRight:"10px"}}>Tyres</a>
        
          <a href="#" style={{color:'yellow',paddingRight:"10px"}}>W.O.F</a>
        
          <a href="#">Brakes</a>
        
          </p>
       
          <p class="footer-company-name"></p>
          </div>
       
          <div class="footer-center">
       
          <div>
          <i class="fa fa-map-marker"></i>
          <p><span style={{color:"green"}}><EditLocationRoundedIcon fontSize="large" color="golden" /></span> <br/> 20 Gracefield Road <br/> Gracefield, Lower Hutt 5010</p>
          </div>
       
          <div>
          <i class="fa fa-phone"></i>
          <p>04 26 00 116</p>
          </div>
       <hr style={{color:'white'}}/>
          <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:info@sparkleauto.co.nz"> <span style={{color:"green" }}><EmailIcon color="white" fontSize="large"/></span><br/>  info@sparkleauto.co.nz</a></p>
          </div>
       
          </div>
       
          <div class="footer-right">
       
          <p class="footer-company-about">
          <span style={{color:"green" }}> <EmojiTransportationIcon fontSize="large"/></span>
          <span>About the company</span>
        If you’re looking for auto repair in Lower Hutt,Wellington, you’ve found us.We work hard to earn your trust and loyalty. We know how important it is to find a car service you can rely on, so your satisfaction is our top priority each and every day.
          </p>
       
          <div class="footer-icons">
       
          <a href="#"><FacebookIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><LinkedInIcon /></a>
          {/* <a href="#"><i class="fa fa-github"></i></a> */}
       
          </div>
       
          </div>
       
          </footer>

                                     
            
        )
    }
}

export default Mainform
