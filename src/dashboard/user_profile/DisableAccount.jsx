import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'

const DisableAccount = () => {
    const showNav = useContext(myContext)

    return (
        <>
            <Header/>
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>

                <div className="disable_account_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <div className="disable_account_div">
                                    <div className="disable_head">
                                        <h5>Suspicious activity?</h5>
                                    </div>
                                    <div className="disable_text">
                                        <div className="title">
                                            <p>Please disable your account to secure your funds.</p>
                                            <p>Lorem ipsum dolor sit amet. Vel voluptatem itaque non tenetur nisi in esse dolores eum ducimus odit a voluptatem harum qui sint sapiente sit ducimus minima. Et ducimus odit a autem animi id omnis doloribus.</p>
                                        </div>
                                    </div>
                                    <div className="disable_btn">
                                        <button className='btn btn-danger'>Disable Your Account</button>
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

export default DisableAccount