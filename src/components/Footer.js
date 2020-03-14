import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

const style ={ 
      lg:{
        
          left: 0,
          bottom: 0,
          height:100,
          width:"100%",
          backgroundColor: 'black',
          color: 'white',
          textAlign:'center',
          justifyItems:'center',
          
          

      },
      container:{
           margin:20,
           padding:10,
          display:'grid',
          gridTemplateColumns: '100px 100px 100px',
          gridTemplateRow:'100px 100px 100px',
          gridGap: '200px',
          textAlign:'center',
      }

}



export class Footer extends Component {

          


    render() {
        return (      
            <footer class="page-footer font-small unique-color-dark">

            <div style="background-color: #6351ce;">
              <div class="container">
          
            
                <div class="row py-4 d-flex align-items-center">
          
                  
                  <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 class="mb-0">Get connected with us on social networks!</h6>
                  </div>
              
          
                 
                  <div class="col-md-6 col-lg-7 text-center text-md-right">
          
                   
                    <a class="fb-ic">
                      <i class="fab fa-facebook-f white-text mr-4"> </i>
                    </a>
                    
                    <a class="tw-ic">
                      <i class="fab fa-twitter white-text mr-4"> </i>
                    </a>
                    
                    <a class="gplus-ic">
                      <i class="fab fa-google-plus-g white-text mr-4"> </i>
                    </a>
                    
                    <a class="li-ic">
                      <i class="fab fa-linkedin-in white-text mr-4"> </i>
                    </a>
                    
                    <a class="ins-ic">
                      <i class="fab fa-instagram white-text"> </i>
                    </a>
          
                  </div>
                  
          
                </div>
               
          
              </div>
            </div>
          
            
           
            
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
            
          
          </footer>
                
    
        )
    }
}

export default Footer
