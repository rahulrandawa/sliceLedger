import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Login_img from '../assets/images/login.png'
import validate from '../validation/ForgetPassword'
import { ForgetPasswordForm } from '../Form'
import myContext from '../context/MyContext'
import { decryptData } from '../Helper'
import { toast } from 'react-toastify';

export default function ForgetPassword() {
    const data = useContext(myContext);
    let History = useNavigate()
    const {
        values,
        errors,
        handleChange,
        handleSubmit
      } = ForgetPasswordForm(Login, validate);

     // =======================ForgetPassword Api Call=====================================
     function Login() {
        fetch("https://bharattoken.org/sliceLedger/admin/api/auth/forgetPassword", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          email:values.email,
          password:values.password
        })
      })
      .then(response => response.json())
      .then(response => {
        const res  = decryptData(response)
        if (parseInt(res.status) == 200) {
            const email = res.result.email;
            sessionStorage.setItem("email", email);
            data.setLoginapi(res)
            toast.success(res.message)
            History('/Reset-Password');
        } else {
            toast.error(res.message)
        }
        
      })
      .catch(err => {
        console.log(err);
      });
    }


    return (
        <>
            <section className='slice_forgetPassword_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} className="forget_form_left_bg">
                            <div className='slice_forget_form_left'>
                                <Image src={Login_img} fluid />
                            </div>
                        </Col>
                        <Col lg={6} className="forget_form_right_bg">
                            <div className="slice_forgetPassword_form">
                                <div className='slice_forgetPassword_form_head'>Forget Password</div>
                                <div className='slice_forgetPasswordForm'>
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className='email_field_div mt-5'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className='col-12' type="email" placeholder='Email' 
                                            name='email'
                                            autoComplete="off"
                                            onChange={handleChange}
                                            />
                                        </div>
                                        {errors.email && (
                                            <span className="error invalid-feedback">{errors.email}</span>
                                        )}
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Password' 
                                            name='password'
                                            autoComplete="off"
                                            onChange={handleChange}
                                            />
                                        </div>
                                        {errors.password && (
                                            <span className="error invalid-feedback">{errors.password}</span>
                                        )}
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Confirm Password' 
                                            name='cpassword'
                                            autoComplete="off"
                                            onChange={handleChange}
                                            />
                                        </div> 
                                        {errors.cpassword && (
                                            <span className="error invalid-feedback">{errors.cpassword}</span>
                                        )}
                                        <input type="submit" value="Continue" />
                                        <div>
                                      </div>
                                    </form>
                                </div>
                                {/* <div className='slice_forgetPassword_form_foot'>
                                    <Link to="/signup">SignUp</Link>
                                    <a href="/">Forget Password ?</a>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
