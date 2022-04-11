import React, {useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import myContext from '../../context/MyContext'

export default function SliceWallet() {
    const showNav = useContext(myContext)

    return (
        <>
            <Header />
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>

                <div className="sliceWallet_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }} >
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="sliceWallet_head mt-4">
                                    <h5>Slice Wallet</h5>
                                </div>
                                <div className="slice_content">
                                    <Col lg={6}>
                                        <div className='sliceWallet_total_balance'>
                                            <div className='sliceWallet_total_title'>
                                                <div><FontAwesomeIcon icon={faWallet} /></div>
                                                <h6>Total Slice Balance</h6>
                                            </div>
                                            <div className='sliceWallet_total_value'>
                                                <h6>20,00,000.00</h6>
                                                <div className='sliceWallet_total_value_text'>SLC</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Row className='justify-content-center'>
                                        <Col lg={4}>
                                            <div className="slice_buy_sell_wallet">

                                                <div className="buy_sell_wallet_subHead">Buy Token</div>
                                                <div className='buyToken_balance'>
                                                    <div className="buyToken_text">Estimated Buying Price</div>
                                                    <div className="buyToken_value">₹10,000 INR</div>

                                                </div>

                                                <div className="buy_sell_input_field">

                                                    <div className="amount_input">
                                                        <label>Enter Your Amount</label>
                                                        <div class="input-group mb-3">
                                                            <input type="number" class="form-control" placeholder="" />
                                                            <div class="input-group-text">INR</div>
                                                        </div>
                                                        <label>Your INR Amount Converted to</label>
                                                        <div class="input-group mb-3">

                                                            <input type="number" class="form-control" placeholder="" />
                                                            <div class="input-group-text">SLC</div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='buy_sell_wallet_Btn'>
                                                    <button className='buy_sell_btn'>Buy</button>

                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="slice_buy_sell_wallet">

                                                <div className="buy_sell_wallet_subHead">Sell Token</div>
                                                <div className='buyToken_balance'>
                                                    <div className="buyToken_text">Estimated Selling Price</div>
                                                    <div className="buyToken_value">₹10,000 INR</div>

                                                </div>

                                                <div className="buy_sell_input_field">

                                                    <div className="amount_input">
                                                        <label>Enter Your Amount</label>
                                                        <div class="input-group mb-3">
                                                            <input type="number" class="form-control" placeholder="" />
                                                            <div class="input-group-text">INR</div>
                                                        </div>
                                                        <label>Your INR Amount Converted to</label>
                                                        <div class="input-group mb-3">

                                                            <input type="number" class="form-control" placeholder="" />
                                                            <div class="input-group-text">SLC</div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='buy_sell_wallet_Btn'>
                                                    <button className='buy_sell_btn sell_btn'>Sell</button>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
