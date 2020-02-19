import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import '../App.css'
import App from '../App'

const style =  {  
   Link:{
    color:'green',
    align:'center',
   }

}

export class Caraousel extends Component {
  
    render() {
        return (
                            <Container fluid style={{backgroundColor:'green',margin: '0 auto'}} >     
                             <Carousel  fluid>
                             <Carousel.Item>
                                  <Image src="https://www.a1kerikeri.co.nz/wp-content/uploads/2016/11/Auto_one_photos_Nov_2016-291-800x400.jpg"  alt="First slide" fluid />
                               
                                 <Carousel.Caption style={style.Link} >
                                 <h3 className={App} >First slide label</h3>
                                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                   </Carousel.Caption>
                             </Carousel.Item>
                             <Carousel.Item fluid>
                                    <Image src="https://www.a1kerikeri.co.nz/wp-content/uploads/2016/11/Auto_one_photos_Nov_2016-291-800x400.jpg"  alt="First slide" fluid />
                               <Carousel.Caption fluid>
                                 <h3>Second slide label</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                               </Carousel.Caption>
                             </Carousel.Item >
                             <Carousel.Item fluid>
                              
                              <Image src="https://www.a1kerikeri.co.nz/wp-content/uploads/2016/11/Auto_one_photos_Nov_2016-291-800x400.jpg"  alt="First slide" fluid />
                               <Carousel.Caption>
                                 <h3>Third slide label</h3>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                               </Carousel.Caption>
                             </Carousel.Item>
                           </Carousel>
                           </Container>
                                       
                                   )
    }
}

export default Caraousel
