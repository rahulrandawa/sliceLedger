import React, {useContext} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'

export default function UserProfileHome() {
    const showNav = useContext(myContext)
    return (
        <>
            <Header/>
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>
                <section className='slice_user_profileHome_section' style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>

                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <div className="user_profileHome_container">
                                    <div className="user_profile_details">
                                        <Row>
                                            <Col lg={12}>
                                                <div className="my_profile_title">
                                                    <h5>My Profile</h5>
                                                </div>
                                            </Col>
                                            <Col lg={4} className="mt-3">
                                                <div className="userProfile_img">
                                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" fluid />
                                                </div>
                                            </Col>

                                            <Col lg={8} className="mt-3">
                                                <div className="personal_section">
                                                    <div className="person_info_title">
                                                        <h6>Personal Information</h6>
                                                    </div>

                                                    <div className="person_details">
                                                        <Row>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>First Name</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>Priyanka</p>
                                                            </Col>


                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Last Name</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>Varma</p>
                                                            </Col>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Email Id</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>user@gmail.com</p>
                                                            </Col>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Mobile No</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>9999999999</p>
                                                            </Col>


                                                        </Row>
                                                    </div>
                                                </div>

                                                <div className="account_section">
                                                    <div className="account_info_title">
                                                        <h6>Account Information</h6>
                                                    </div>

                                                    <div className="account_details">
                                                        <Row>

                                                            <Col lg={6} md={6}>
                                                                <p className='title color'>Current Balance</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text color'>10,000 INR</p>
                                                            </Col>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Account Name	</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>Demo</p>
                                                            </Col>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Account No</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>XXXX-XXXXX-XXXX-XXX</p>
                                                            </Col>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>IFSC Code</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>AEFD50254</p>
                                                            </Col>

                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Account Type</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text'>Salary</p>
                                                            </Col>




                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </Container>
                </section>
            </div>

        </>
    )
}

