import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import About from '../assets/images/about.webp'
export default function AboutSection() {
    return (
        <>
            <section className='slice_about_section' id='about'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div>
                                <Image className='w-100' src={About} alt="about" fluid />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='slice_about_content_div'>
                                <div className='slice_about_contents'>
                                    <div className='about_text'>About Us</div>
                                    <h2>Your Heading Text Here</h2>
                                    <hr />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illum labore voluptatum facilis dolorem dicta a accusamus soluta tenetur fuga quis placeat odit quod, cum vero asperiores? Iure, cum earum.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
