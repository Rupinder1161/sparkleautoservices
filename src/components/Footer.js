import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

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
                    <Container fluid style={style.lg}>
                            <Row>
                                     <Col><h5>Services</h5></Col>
                              <Col><h5>Services</h5></Col>   
                              <Col><h5>About us</h5></Col>
                            </Row>
                            <Row>
                              <Col>1 of 1</Col>
                              <Col>1 of 2</Col>
                              <Col>1 of 3</Col>
                            </Row>
                            <h6>copyright @2019 sparkleAutorepairs.com</h6>
                     </Container>
                
    
        )
    }
}

export default Footer
