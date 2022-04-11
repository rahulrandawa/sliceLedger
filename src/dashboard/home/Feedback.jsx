import React, { useState,useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Header from '../common/Header'

import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'

export default function Feedback() {
    const showNav = useContext(myContext)
   

    return (
        <>
            <Header/>
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px",transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>

                <div className="user_feedback_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw",transition: "all 0.5s ease" }}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <div className="user_feedback_div">
                                    <div className="feedback_content">
                                        <div className="feedback_title">
                                            <h5>Feedback/Suggestions</h5>
                                        </div>

                                        <div className="feedback_text">
                                            <p>Tell Us What you love about Slice Ledger, Or what we could be doing Better</p>

                                        </div>

                                        <div className="feedback_msg_input">
                                            <textarea className='form-control' rows={6} placeholder='Write your feedback/suggestions'></textarea>
                                        </div>

                                        <div className="feedback_btn">
                                            <button className='submit_btn'>Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </>
    )
}

