 import React from 'react';
 import { Container, Row, Col,  ListGroup, ListGroupItem} from 'reactstrap';
 import './footer.css';
 import footerImg from '../../assets/images/footer_img.jpg';

 const footerQuickLinks = [
        {
            display : 'Resource',
            url: '#'
        },
        {
            display : 'Blog',
            url: '#'
        },
        {
            display : 'Documents',
            url: '#'
        },
        
 ]  


  const footerComLinks = [
       
        {
            display : 'Support',
            url: '#'
        },
        {
            display : 'Help',
            url: '#'
        },
        
 ] 

 const footerInfoLinks = [
        {
            display : 'About Us',
            url: '#'
        },
        {
            display : 'Partners',
            url: '#'
        },
        {
            display : 'Contact us',
            url: '#'
        },
        
 ] 
 
  const footerCourseskLinks = [
        {
            display : 'Python',
            url: '#'
        },
        {
            display : 'C',
            url: '#'
        },
        {
            display : 'C++',
            url: '#'
        },
         {
            display : 'JavaScript',
            url: '#'
        },
         {
            display : 'Java',
            url: '#'
        },
         {
            display : 'Rust',
            url: '#'
        },
         {
            display : 'Golang',
            url: '#'
        },
         {
            display : 'Kotlin',
            url: '#'
        },
         {
            display : 'Swift',
            url: '#'
        },
         {
            display : 'R',
            url: '#'
        },
         {
            display : 'SQL',
            url: '#'
        },
        
 ] 
 


 const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                  

                <Col lg='3' md='6'>
                    <h6 className='text-white pt-4'>Courses</h6>
                    <ListGroup className='link_list'>
                        {
                            footerCourseskLinks.map((item,index)=> (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'><a href={item.url}>
                                    {item.display}
                                </a>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3' md='6'>
                    <h6 className='text-white pt-4'>Explore</h6>
                    <ListGroup className='link_list'>
                        {
                            footerQuickLinks.map((item,index)=> (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'><a href={item.url}>
                                    {item.display}
                                </a>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3' md='6'>
                    <h6 className='text-white pt-4'>Community</h6>
                    <ListGroup className='link_list'>
                        {
                            footerComLinks.map((item,index)=> (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'><a href={item.url}>
                                    {item.display}
                                </a>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3' md='6'>
                    <h6 className='text-white pt-4'>Rapt 'N' Rel</h6>
                    <ListGroup className='link_list'>
                        {
                            footerInfoLinks.map((item,index)=> (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'><a href={item.url}>
                                    {item.display}
                                </a>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='12' className=''>
                    <div className='d-flex align-items-center justify-content-center gap-2 p-4 logo'>
                        <img src={footerImg} alt="" />
                    </div>

                    <div className='follows'>
                        <p className='mb-0 d-flex align-items-center justify-content-center gap-2 text-white'>© Nuevicsu Tech. All rights reserved.</p> 
                        
                        <div className='d-flex align-items-center justify-content-center gap-2 links_socials'>
                            <span>
                            {" "}
                            <a href="facebook.com">
                                <i class="ri-facebook-fill text-white"></i>
                            </a>
                        </span>

                        <span>
                            {" "}
                            <a href="twitter.com">
                                <i class="ri-twitter-fill text-white"></i>
                            </a>
                        </span>

                        <span>
                            {" "}
                            <a href="instagram.com">
                                <i class="ri-instagram-line text-white"></i>
                            </a>
                        </span>

                        <span>
                            {" "}
                            <a href="linkedln.com">
                                <i class="ri-linkedin-fill text-white"></i>
                            </a>
                        </span>
                        </div>

                    </div>
                </Col> 
            </Row>
        </Container>
    </footer>
 };

 export default Footer ;