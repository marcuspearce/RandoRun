import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from './LocationForm.js'

function App() {
  return (
    <div>
      <Navbar bg="primary" variant='light'>
        <Navbar.Brand>RandoRun</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <LocationForm />
          </Col>
          <Col xs={8} className='mapview'>
            There
          </Col>
        </Row>
    </Container>
  </div>
  );
}
export default App;