import React from 'react'
import './updates.css'
import { Container, Row, Col } from 'reactstrap'
import updateImg from '../../assets/images/getUpdates_img.png'

const Updates = () => {
  return (
    <section className='updates_section'>
        <Container className='updates pt-5'>
            <Row>

              <Col lg='6' md='6' className='text-left'>

                <div className='update_content'>
                   <div className='text-white pb-4'>
                       <h2 className='update_title text-white'>  GET UPDATES</h2>
                       <p className='update_p text-white'>
    Join our newsletter for the latest updates.
                       </p>
                   </div>


                   <div className='getUpdates'>
                <input type="text" placeholder='example@gmail.com' />
                <button className='btn btn-update'>SUBSCRIBE</button>
                   </div>
                </div>
              
              </Col>

               <Col lg='6' md='6'>
                <div className='update_img'>
                <img src={updateImg} alt=""  className='w-100'/>
                </div>
              </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Updates