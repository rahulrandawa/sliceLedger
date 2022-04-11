import React, { useState,useContext } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import bank_img from '../../assets/images/bank.jpg'
import { Link } from 'react-router-dom'
import myContext from '../../context/MyContext'

export default function FiatWallet() {
    const showNav = useContext(myContext)

    const [showOtpField, setShowOtpField] = useState(false)
    const [show, setShow] = useState(false)

    const handleWithdraw = () => {
        setShowOtpField(true)
    }

    const handleClose = () => setShow(false)
    const handleVerifyModal = () => {
        setShowOtpField(false)
        setShow(true)
    }

   


    return (
        <>
            <Header/>
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>

                <div className="fiat_wallet_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12}>
                                <div className="fiat_wallet_head mt-4">
                                    <h5>Fiat Wallet</h5>
                                </div>
                                <div className="fiat_content">
                                    <Col lg={6}>
                                        <div className='flat_wallet_total_balance'>
                                            <div className='flat_wallet_total_title'>
                                                <div><FontAwesomeIcon icon={faWallet} /></div>
                                                <h6>Total Wallet Balance</h6>
                                            </div>
                                            <div className='flat_wallet_total_value'>
                                                <h6>20,00,000.00</h6>
                                                <div className='flat_wallet_total_value_text'>INR</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Row className='justify-content-center'>
                                        <Col lg={8}>
                                            <div className='slice_withdrawal_content'>
                                                <div className="withdrawal_title">
                                                    <h6>Withdrawal Funds</h6>
                                                </div>
                                                <div className="slice_withdrawal_section">
                                                    <div className='withdrawal_Head'>INR Withdraw INR to Your Bank Account </div>
                                                    <div className='withdrawal_Balance'>
                                                        <div>₹3,171</div>
                                                        <div>Current Balance</div>
                                                    </div>
                                                    <div className='withdrawal_message'>Money Would be deposited in the following bank account:</div>
                                                    <div className='withdrawal_account_details'>
                                                        <table className=''>
                                                            <tr>
                                                                <td>ACCOUNT NO</td>
                                                                <td className='px-4'>XXXX-XXXXX-XXXX-XXX</td>
                                                            </tr>
                                                            <tr>
                                                                <td>IFSC</td>
                                                                <td className='px-4'>AEFD50254</td>
                                                            </tr>
                                                            <tr>
                                                                <td>ACCOUNT TYPE</td>
                                                                <td className='px-4'>SALARY</td>
                                                            </tr>
                                                            <tr>
                                                                <td>ACCOUNT NAME</td>
                                                                <td className='px-4'>DEMO</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className='withdrawal_amount'>
                                                        <div className='withdrawal_amount_text'>ENTER THE AMOUNT YOU WISH TO WITHDRAW</div>
                                                        <div className='withdrawal_amount_input'>
                                                            <input className='col-7 mx-1' placeholder='Enter the amount' type="number" pattern='[0-9]' />
                                                            <button className='col-4 btn btn-success' onClick={handleWithdraw}>Withdraw</button>
                                                        </div>
                                                        {showOtpField ?
                                                            <div className='withdrawal_otp_input'>
                                                                <input className='col-7 mx-1' placeholder='Enter OTP' type="number" pattern='[0-9]' />
                                                                <button className='col-4 btn btn-success' onClick={handleVerifyModal}>Verify OTP</button>
                                                            </div>
                                                            : " "
                                                        }

                                                    </div>


                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <Col lg={8}>
                                            <div className='slice_withdrawal_content'>
                                                <div className="withdrawal_title">
                                                    <h6>Add Funds</h6>
                                                </div>
                                                <div className='slice_addFund_section'>
                                                    <div className='addFund_Head'>Add Fund to your Wallet </div>
                                                    <div className='addFund_Balance'>
                                                        <div className='addFund_Balance_value'>₹3,171</div>
                                                        <div className='current_balance_txt'>Current Balance</div>
                                                    </div>
                                                    <form>

                                                        <div className='addFund_btn'>
                                                            <p>0% Deposit Fee on Bank Transfer for ₹7500 & Above</p>
                                                        </div>
                                                        <div className='add_amount_input'>
                                                            <input className='col-7 mx-1 ' placeholder='Enter the amount' min={100} max={51000} title='Min. ₹100 - Max ₹51,000' />

                                                            <Link to="/payment_method" className='col-4  btn btn-success'>Next</Link>

                                                        </div>
                                                        <div className='note'>Min. ₹100 - Max ₹51,000</div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                    {/* ================verify modal==================== */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>INR Withdrawal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="verify_withdraw_modal">
                                <div className="withdraw_image">
                                    <img src={bank_img} alt="withdraw_img" className='img-fluid' />
                                </div>

                                <div className="request_msg">
                                    Request Received
                                </div>

                                <div className="amount">₹10,000</div>
                                <div className="text_msg1">Will be credited to your registered bank account</div>
                                <div className="text_msg2">For Security reasons, withdrawals will not bo allowed for the next 24 hours when you change your login credentials/phone number</div>
                                <div className="text_msg3">For more queries contact support</div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </div>
            </div>

        </>
    )
}

