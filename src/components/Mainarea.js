import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { green, red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import shadows from '@material-ui/core/styles/shadows';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
const useStyles = {
    Paper: {
        minWidth: 275,
        color:'white',
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
        color:'red'
      },
      pos: {
        marginBottom: 12,
      },
}

const lewis ={
    root: {
      width: '100%',
      maxWidth: 360,
      align:'center'
    },
    border1:{
      border:"2px solid rgb(255, 111, 97)",
      boxShadow:'0px 0px 10px 5px rgb(255, 111, 97)',
    }
  ,
  border2: {
    border:"2px solid RGB(136, 176, 75)",
    boxShadow:'0px 0px 10px 5px RGB(136, 176, 75)',
  },
  border3: {
    border:"2px solid RGB(136, 176, 75)",
    boxShadow:'0px 0px 10px 5px RGB(136, 176, 75)',
  }
}

export class Mainarea extends Component {

    render() {
    
        return (
          
          
         <Container  style={{marginTop:'10',display:'flex',flexDirection:'row',justifyContent:'center'}}>

<CardDeck>
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
                    {/* <Row fluid >
                           <Col >  
                           <Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
                           
                          </Col>
                          <Col >
                                      <Card bg="primary" text="white" style={{ width: '18rem' }}>
                                      <Card.Header>Header</Card.Header>
                                      <Card.Body>
                                      <Card.Title>Primary Card Title</Card.Title>
                                    <Card.Text>
                                     Some quick example text to build on the card title and make up the bulk
                                     of the card's content.
                                      </Card.Text>
                                     </Card.Body>
                          </Card>
                            
                          </Col>
                          <Col >
                             
                          
                          
                           </Col>
                    </Row> */}
         </Container>

          // </div>
      )
  }
}

export default Mainarea
