import React from 'react'
import { Container, Row, Col,Accordion } from "react-bootstrap"
import { Link,useLocation,useNavigate  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faGauge,faUser,faPenToSquare,faSliders,faUserXmark,faKey,faFileInvoice,faUserCheck,faMoneyBillTransfer,faMessage,faArrowRightFromBracket,faLock} from '@fortawesome/free-solid-svg-icons'
// import { faWallet} from '@fortawesome/free-regular-svg-icons'
import { decryptData } from '../../Helper'
import { ReactSession } from 'react-client-session'


export default function SideNavbar() {
    ReactSession.setStoreType("localStorage");
    let History = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const accessToken =  localStorage.getItem('accessToken')


 // =======================Logout Api Call=====================================
 function logout() {
    fetch("https://bharattoken.org/sliceLedger/admin/api/auth/logout", {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            Authorization: accessToken
        },
       })
      .then(response => response.json())
      .then(response => {

        const res  = decryptData(response)
        localStorage.removeItem('accessToken');
        localStorage.clear();
        sessionStorage.clear()
        History('/login');
       
      })
      .catch(err => {
        console.log(err);
        localStorage.removeItem('accessToken');
        localStorage.clear();
        sessionStorage.clear()
        History('/login');
      });
 }
// ===============================End Logout Api Call ========================================
    return (
        <>
            <div className="slice_dash_sideNav">
                        <Container>
                            <Row>
                                <Col lg={12} className="px-0">
                                    <div className="sideNav_header d-none">
                                        <div className="slice_logo">
                                            <a href="#" className='navbar-brand'>SliceLedger</a>
                                        </div>
                                    </div>
                                    <div className="sideNav_body">
                                        <div className="sideNav_menu">
                                            <ul>
                                                <li  className={splitLocation[1] === "dashboard" ? "active" : ""}>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                            <FontAwesomeIcon icon={faGauge} />
                                                        </div>
                                                        <div className='title'><Link to='/dashboard'>Dashboard</Link></div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faUser} />
                                                                    </div>
                                                                    <div className='title'>Profile</div>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                              <li className={splitLocation[1] === "user_profile" ? "active" : ""}>
                                                              <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faUser} />
                                                                    </div>
                                                                    <div className='title'><Link to='/user_profile'>My Profile</Link></div>
                                                                </div>
                                                              </li>
                                                              <li className={splitLocation[1] === "edit_user_profile" ? "active" : ""}>
                                                              <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </div>
                                                                    <div className='title'><Link to='/edit_user_profile'>Edit Profile</Link></div>
                                                                </div>
                                                              </li>
                                                             <li className={splitLocation[1] === "account_details" ? "active" : ""}>
                                                             <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faSliders} />
                                                                    </div>
                                                                    <div className='title'><Link to='/account_details'>Account Details</Link></div>
                                                                </div>
                                                             </li>
                                                              <li className={splitLocation[1] === "disable_account" ? "active" : ""}>
                                                              <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                    <FontAwesomeIcon icon={faUserXmark} />
                                                                    </div>
                                                                    <div className='title'><Link to='/disable_account'>Disable Account</Link></div>
                                                                </div>
                                                              </li>
                                                             <li className={splitLocation[1] === "user_change_pwd" ? "active" : ""}>
                                                             <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faKey} />
                                                                    </div>
                                                                    <div className='title'><Link to='/user_change_pwd'>Change Password</Link></div>
                                                                </div>
                                                             </li>
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>
                                                </li>
                                                <li>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faWallet} />
                                                                    </div>
                                                                    <div className='title'>Wallet</div>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <li className={splitLocation[1] === "fiat_wallet" ? "active" : ""}>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faWallet} />
                                                                    </div>
                                                                    <div className='title'><Link to='/fiat_wallet'>Fiat Wallet</Link></div>
                                                                </div>
                                                                </li>
                                                              <li className={splitLocation[1] === "slice_wallet" ? "active" : ""}>
                                                              <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faWallet} />
                                                                    </div>
                                                                    <div className='title'><Link to='/slice_wallet'>Slice Wallet</Link></div>
                                                                </div>
                                                              </li>
                                                              <li className={splitLocation[1] === "transaction_list" ? "active" : ""}>
                                                                    <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                    <FontAwesomeIcon icon={faFileInvoice} />
                                                                    </div>
                                                                    <div className='title'><Link to='/transaction_list'>Transaction List</Link></div>
                                                                </div>
                                                              </li>
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>

                                                </li>
                                                <li className={splitLocation[1] === "kyc_verification" ? "active" : ""}>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                        <FontAwesomeIcon icon={faUserCheck} />
                                                        </div>
                                                        <div className='title'><Link to='/kyc_verification'>KYC Verification</Link></div>
                                                    </div>

                                                </li>
                                                <li className={splitLocation[1] === "transaction_history" ? "active" : ""}>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                        <FontAwesomeIcon icon={faMoneyBillTransfer} />
                                                        </div>
                                                        <div className='title'><Link to='/transaction_history'>Transaction History</Link></div>
                                                    </div>

                                                </li>
                                                <li className={splitLocation[1] === "feedback" ? "active" : ""}>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                            <FontAwesomeIcon icon={faMessage} />
                                                        </div>
                                                        <div className='title'><Link to='/feedback'>Feedback</Link></div>
                                                    </div>

                                                </li>
                                                <li className={splitLocation[1] === "security" ? "active" : ""}>
                                                <div className='menu'>
                                                    <div className='menu_icon'>
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </div>
                                                    <div className='title'><Link to='/security'>Security</Link></div>
                                                </div>
                                            </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                        </div>
                                                        <div className='title' onClick={logout}>Logout</div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
        </>
    )
}
