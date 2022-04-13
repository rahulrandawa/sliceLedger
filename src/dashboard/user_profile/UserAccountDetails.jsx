import React, { useState,useContext } from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faCircleExclamation, faEye } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'
import validate from '../../validation/AddBank'
import { decryptData } from '../../Helper'
import { AddBankForm } from '../../Form'

const accessToken =  localStorage.getItem('accessToken')

const username =  localStorage.getItem('username')
export default function User_Account_details() {
    const showNav = useContext(myContext)

    const [togglePwd, setTogglePwd] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false);
    const handleCheckPassword = () => {
        setTogglePwd(!togglePwd)
        setPasswordShown(!passwordShown)
    }

    // Add Bank Api Call......................................
function AddBank() {
    fetch("https://bharattoken.org/sliceLedger/admin/api/auth/addBank", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json",
          Authorization: accessToken
        },
        "body": JSON.stringify({
          acountNumber:values.acountNumber,
          ifsc:values.ifsc,
         
        })
      })
      .then(response => response.json())
      .then(response => {
        const res  = decryptData(response)
        console.log(res)
       
      })
      .catch(err => {
        console.log(err);
      });
    }
// End Add bank Api Call..............................
const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = AddBankForm(AddBank, validate);

    return (
        <>
            <Header/>
            <div className="main-section d-flex">

                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>
                <section className='slice_user_account_details' style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <div className="account_details_div">
                                    <div className="head">
                                        <div>Add your bank account to enable INR deposits and withdrawals</div>
                                    </div>

                                    <div className="text">
                                        <div>Bank Account should belong to</div>
                                    </div>
                                    <div className="username">
                                        <p>User Name</p>
                                    </div>
                                    <form  onSubmit={handleSubmit} noValidate>
                                    <input type="hidden" name="name" value={username} />
                                    <div className="account_number_fields">
                                        <div className="account_number_div">
                                            <input type={passwordShown ? "text" : "password"} placeholder='Account Number'  
                                            onChange={handleChange} 
                                            name="acountNumber"/>
                                            <div className="icon" onClick={handleCheckPassword}>
                                                <FontAwesomeIcon icon={togglePwd ? faEye : faEyeSlash} />
                                            </div>
                                        </div>

                                        <div className="re-account_number_div">
                                            <input type="password" placeholder='Re-Enter Account Number' 
                                            onChange={handleChange} 
                                            name="re_acountNumber"/>
                                        </div>

                                        <div className="ifsc_code_div">
                                            <input type="text" placeholder='IFSC Code' 
                                            onChange={handleChange} 
                                            name="ifsc"/>
                                        </div>

                                        <div className="warning_msg">
                                            <div className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                                            <p>The above bank account must belong to you. Any other bank account will be rejected.</p>
                                        </div>

                                        <div className="account_details_btn">
                                            <button className='proceed_button' type="submit">Proceed</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}
