import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./offer.css"
import gradientImg from '../../assets/images/gradient-list-style.png'
import offerImg from '../../assets/images/offer.png'

const Offer = () => {
  return (
    <section>
      <Container>
        <Row>

    <Col lg='6' md='6'>
        <div className='about_img'>
            <img src={offerImg} alt='' className='w-100'/>
        </div>
    </Col>


   <Col lg='6' md='6'>
      <div className='offer_content'>
        <h2>Kind of Courses we offer</h2>,
        <p>Programming guides and samples composed <br /> in a clear and easy-to-grasp terminology, <br />intentded for novice learners</p>

        <div className='d-flex gap-5 align-items-center'>
            <div className='single-offers'>
              <p className='offer_title'> 
                <img src={gradientImg} alt="" /> Highly Intuitive
              </p>
            </div>
            <div className='single-offers'>
              <p className='offer_title'> 
                <img src={gradientImg} alt="" /> Save Time
              </p>
            </div>
            <div className='single-offers'>
              <p className='offer_title'> 
                <img src={gradientImg} alt="" /> Save Money
              </p>
            </div>
            <div className='single-offers'>
              <p className='offer_title'> 
                <img src={gradientImg} alt="" /> Build skill confidence
              </p>
            </div>
        </div>

        <a href="explore.com"><button className='btn btn-offer'>EXPLORE COURSES</button></a>

      </div>
    </Col>


        </Row>
      </Container>
    </section>
  )
}

export default Offer