import React,{useState,useContext} from 'react'
import { Container, Row, Col,Table ,Image} from 'react-bootstrap'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import coin from '../../assets/images/coin.png'
import myContext from '../../context/MyContext'

export default function TransactionHistory() {
    const showNav = useContext(myContext)

    return (
        <>
            <Header/>
           <div className="main-section d-flex">
           <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px",transition: "all 0.5s ease" }}>
               <SideNavbar/>
            </div>


            <div className="transaction_history_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h5 className='mt-4'>Token Transactions</h5>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            
                            <div className="transaction_history_content">
                                <div className="transaction_history_title">
                                    <h6>All Buy Transactions</h6>
                                </div>

                                <div className="transaction_history_table">
                                    <Table striped bordered hover size="sm" responsive>
                                        <thead>
                                            <tr>
                                                
                                                <td><div className="head">Token Name</div></td>
                                                <td><div className="head">Date/Time</div></td>
                                                <td><div className="head">Quantity</div></td>
                                                <td><div className="head">Price</div></td>
                                                <td><div className="head">Total</div></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td>  
                                                  <div className="token_name_details">
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className="token_name">SliceLedger</div>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div className="date">20-Feb-2022</div>
                                                  <div className="time">8:30PM</div>
                                              </td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price buy">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>

                                            <tr>
                                            <td>  
                                                  <div className="token_name_details">
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className="token_name">SliceLedger</div>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div className="date">20-Feb-2022</div>
                                                  <div className="time">8:30PM</div>
                                              </td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price buy">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>

                                            <tr>
                                             <td>  
                                                  <div className="token_name_details">
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className="token_name">SliceLedger</div>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div className="date">20-Feb-2022</div>
                                                  <div className="time">8:30PM</div>
                                              </td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price buy">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            
                            <div className="transaction_history_content">
                                <div className="transaction_history_title">
                                    <h6>All Sell Transactions</h6>
                                </div>

                                <div className="transaction_history_table">
                                    <Table striped bordered hover size="sm" responsive>
                                        <thead>
                                            <tr>
                                                
                                                <td><div className="head">Token Name</div></td>
                                                <td><div className="head">Date/Time</div></td>
                                                <td><div className="head">Quantity</div></td>
                                                <td><div className="head">Price</div></td>
                                                <td><div className="head">Total</div></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>  
                                                  <div className="token_name_details">
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className="token_name">SliceLedger</div>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div className="date">20-Feb-2022</div>
                                                  <div className="time">8:30PM</div>
                                              </td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price sell">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>

                                            <tr>
                                             <td>  
                                                  <div className="token_name_details">
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className="token_name">SliceLedger</div>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div className="date">20-Feb-2022</div>
                                                  <div className="time">8:30PM</div>
                                              </td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price sell">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>

                                            <tr>
                                             <td>  
                                                  <div className="token_name_details">
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className="token_name">SliceLedger</div>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div className="date">20-Feb-2022</div>
                                                  <div className="time">8:30PM</div>
                                              </td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price sell">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                        </tbody>
                                    </Table>
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

