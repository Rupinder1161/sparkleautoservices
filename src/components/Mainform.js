import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import './mainform.css'

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
          <p><span>20 Gracefield Road</span> Gracefield, Lower Hutt 5010</p>
          </div>
       
          <div>
          <i class="fa fa-phone"></i>
          <p>+1 555 123456</p>
          </div>
       
          <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">info@sparkleauto.co.nz</a></p>
          </div>
       
          </div>
       
          <div class="footer-right">
       
          <p class="footer-company-about">
          <span>About the company</span>
        If you’re looking for auto repair in Lower Hutt,Wellington, you’ve found us.We work hard to earn your trust and loyalty. We know how important it is to find a car service you can rely on, so your satisfaction is our top priority each and every day.
          </p>
       
          <div class="footer-icons">
       
          <a href="#"><i className={facebook}></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
       
          </div>
       
          </div>
       
          </footer>

                                     
            
        )
    }
}

export default Mainform
