import React, { useContext } from 'react'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import myContext from '../../context/MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComputer} from '@fortawesome/free-solid-svg-icons'
import {MdOutlineComputer} from 'react-icons/md'
import {BiMobile} from 'react-icons/bi'
export default function Security() {
    const showNav = useContext(myContext)

    return (
        <>
            <Header />
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>

                <div className="user_feedback_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={11}>
                                <div className='slice_security_div'>
                                    <div className='slice_security_head'>
                                        <h1>Login Activity</h1>
                                        <button>SignOut from all Devices</button>
                                    </div>
                                    <div className='slice_security_body'>
                                        <Tabs defaultActiveKey="signIn" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="signIn" title="SignIn">
                                                <Container>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className='slice_signIn_details'>
                                                                {/* <FontAwesomeIcon className='signIn_computer_icon' icon={faComputer}/> */}
                                                                <MdOutlineComputer className='signIn_computer_icon'/>
                                                                <div className='slice_signIn_status'>
                                                                        active
                                                                </div>
                                                                <b>Chrome 100.0 - GNU/Linux</b>
                                                                <p>Signed in 8 minutes ago </p>
                                                                <p>From Delhi - DL - IN</p>
                                                                <p>IP address 125.19.161</p>
                                                                <div className='signIn_actionBtns'>
                                                                    <button>Sign Out</button>
                                                                    <button>Remove From Verified</button>
                                                                    <button>Block Device</button>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                        <div className='slice_signIn_details'>
                                                                {/* <FontAwesomeIcon className='signIn_computer_icon' icon={faComputer}/> */}
                                                                <BiMobile className='signIn_computer_icon'/>
                                                                <div className='slice_signIn_status'>
                                                                        active
                                                                </div>
                                                                <b>Android Browser - Android 11.0</b>
                                                                <p>Signed in 2 days ago </p>
                                                                <p>From Indore - MP - IN</p>
                                                                <p>IP address 49.15.161</p>
                                                                <div className='signIn_actionBtns'>
                                                                    <button>Sign Out</button>
                                                                    <button>Remove From Verified</button>
                                                                    <button>Block Device</button>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Tab>
                                            <Tab eventKey="signOut" title="SignOut">
                                            <Container>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className='slice_signIn_details'>
                                                                {/* <FontAwesomeIcon className='signIn_computer_icon' icon={faComputer}/> */}
                                                                <MdOutlineComputer className='signIn_computer_icon'/>
                                                                <div className='slice_signIn_status'>
                                                                        active
                                                                </div>
                                                                <b>Chrome 100.0 - GNU/Linux</b>
                                                                <p>Signed in 8 minutes ago </p>
                                                                <p>From Delhi - DL - IN</p>
                                                                <p>IP address 125.19.161</p>
                                                             
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                        <div className='slice_signIn_details'>
                                                                {/* <FontAwesomeIcon className='signIn_computer_icon' icon={faComputer}/> */}
                                                                <BiMobile className='signIn_computer_icon'/>
                                                                <div className='slice_signIn_status'>
                                                                        active
                                                                </div>
                                                                <b>Android Browser - Android 11.0</b>
                                                                <p>Signed in 2 days ago </p>
                                                                <p>From Indore - MP - IN</p>
                                                                <p>IP address 49.15.161</p>
                                                             
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Tab>
                                            <Tab eventKey="blocked" title="Blocked" >
                                            <Container>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className='slice_signIn_details'>
                                                                {/* <FontAwesomeIcon className='signIn_computer_icon' icon={faComputer}/> */}
                                                                <MdOutlineComputer className='signIn_computer_icon'/>
                                                                <div className='slice_signIn_status'>
                                                                        active
                                                                </div>
                                                                <b>Chrome 100.0 - GNU/Linux</b>
                                                                <p>Signed in 8 minutes ago </p>
                                                                <p>From Delhi - DL - IN</p>
                                                                <p>IP address 125.19.161</p>
                                                                <div className='signIn_actionBtns justify-content-center'>
                                                                    <button>Remove</button>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                        <div className='slice_signIn_details'>
                                                                {/* <FontAwesomeIcon className='signIn_computer_icon' icon={faComputer}/> */}
                                                                <BiMobile className='signIn_computer_icon'/>
                                                                <div className='slice_signIn_status'>
                                                                        active
                                                                </div>
                                                                <b>Android Browser - Android 11.0</b>
                                                                <p>Signed in 2 days ago </p>
                                                                <p>From Indore - MP - IN</p>
                                                                <p>IP address 49.15.161</p>
                                                                <div className='signIn_actionBtns justify-content-center'>
                                                                   <button>Remove</button>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Tab>
                                        </Tabs>
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
