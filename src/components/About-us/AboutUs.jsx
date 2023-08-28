import React from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../assets/images/aboutUs_img.png'

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>


          <Col lg='6' md='6'> 
              <div className='about_content'>
                <h2>About Us</h2>
                <p>Rapt 'N Rel is a programming learning platform developed by Nuevicsu Tech with the aim of empowering individuals to become proficient programmers.
This platform offers comprehensive and user-friendly tutorials to cater to people of varying levels of expertise</p>
              </div>
          </Col>


          <Col lg='6' md='6'> 
             <div className='about_img'>
                  <img src={aboutImg} alt="" className='w-100' />
             </div>
          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default AboutUs