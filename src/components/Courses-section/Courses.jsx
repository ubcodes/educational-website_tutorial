import React from 'react'
import { Container } from 'reactstrap'
import './courses.css'
import CourseCard from './CourseCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'slick-carousel'


const coursesData = [
    {
        id: '01',
        title : 'Python',
        lesson: 'Python is a popular programming language used for artificail intelligence, data science, web development and many more.',
    },
    {
        id: '02',
        title : 'C ',
        lesson: 'C is a general-purpose programming language that provides low-level access to system memory. It is a versatile language that can crate all sorts of applications.',
    },
    {
        id: '03',
        title : 'C++',
        lesson: 'C++ is an object-oriented programming language. It is portable  and can be used to develop applicatinos that can be adapted to multiple platforms. C++ is fun and easy to learn!',
    },
    {
        id: '03',
        title : 'C#',
        lesson: 'C# is a general-purpose high-level programming language.C# is used ot develop eb apps, desktop apps, mobile apps, games and much more.',
    },
    {
        id: '04',
        title : 'JavaScript',
        lesson: 'JavaScript is a programming language of the web. JavaScript is easy to learn.',
    },
    {
        id: '05',
        title : 'Java',
        lesson: 'Java is an object-oriented programming language.Java is used to develop mobile apps, web apps, desktop apps, games and much more.',
    },
     {
        id: '06',
        title : 'Rust',
        lesson: 'Rust is a system programming languate that facilitates designing and writing computer programs that allows smooth integration of computer hardware and software.',
    },
     {
        id: '07',
        title : 'Golang',
        lesson: 'Golang is an opensource programming language developed by google. It is useful for carring out programming for scalable servers and large software systems.',
    },
    {
        id: '08',
        title : 'Kotlin',
        lesson: 'Kotlin is an open source programming language that combines object-oriented programming and functional features into a unique platform. Kotlin is easy to learn.',
    },{
        id: '09',
        title : 'Swift',
        lesson: 'Swift is a powerful intuitive programming language for ioS, iPadOS, macOs,tvOS, and watchOs.Writing Swift Code is interactive and fun.',
    },
    {
        id: '10',
        title : 'R',
        lesson: 'R is a progamming language and software environment for statical analysis, graphics representation and reporting.It is used by data scientists and major corporatins like Google, Airbnb, Facebook etc for data analysis',
    },
    {
        id: '11',
        title : 'SQL',
        lesson: 'SQL stands for Structured Query Language. SQL lets you access and manipulate databases.',
    },

]

const Courses = () => {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 0,
            slidesToScroll: 0
          }
        }
      ]
    };

  return (
    <Container>

    <div className='course_content mx-auto flex flex-col justify-col max-w-sm'>
      <h1  className='text-left text-2xl font-bold my-12'>  Popular Courses </h1>

    </div>

    <Slider {...settings}>

    { coursesData.map(item => (
      <CourseCard key={item.id} item={item} />
    )) }


    </Slider>

    </Container>
  )
}

export default Courses