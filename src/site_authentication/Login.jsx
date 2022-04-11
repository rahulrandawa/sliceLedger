import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import React, { useState, useEffect, useContext } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import myContext from '../context/MyContext'
import validate from '../validation/Login'
import { Link, useNavigate } from 'react-router-dom'
import Login_img from '../assets/images/login.png'
import { decryptData } from '../Helper'
import { LoginForm } from '../Form'
import { toast } from 'react-toastify';

export default function Login() {
    // ============================ Hide and Show Password Start ================================
    const [passwordShow, setPasswordShow] = useState(false)
    let History = useNavigate()
    const data = useContext(myContext);
    function passwordEye() {
        setPasswordShow(!passwordShow)
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit
      } = LoginForm(Login, validate);

    // =======================SignUp Api Call=====================================
    function Login() {
        fetch("https://bharattoken.org/sliceLedger/admin/api/auth/login", {
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
            History('/verify-otp');
        }else{
            toast.error(res.message)
        }

      })
      .catch(err => {
        console.log(err);
      });
    }

    return (
        <>
            <section className='slice_login_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} className="login_form_left_bg">
                            <div className='slice_login_form_left'>
                                {/* <h1>Sliceledger</h1> */}
                                <Image src={Login_img} fluid />
                                {/* <h2>Your Headline Text Here</h2> */}
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat quas repellendus ullam, illum magni ea doloremque nulla. Cumque sint, explicabo et necessitatibus accusamus quisquam reiciendis atque neque modi earum!</p> */}
                            </div>
                        </Col>
                        <Col lg={6} className="login_form_right_bg">
                            <div className="slice_login_form">
                                <div className='welcome_back_text'>Welcome Back</div>
                                <p className='login_subtitle'>Login into your Sliceledger Dashboard</p>
                                {/* <div className='slice_login_form_head'>Login</div> */}
                                <div className='slice_loginForm'>
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className={`col-12 user_email ${errors.email && 'is-invalid'}`} type="email" placeholder='Email' required
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
                                            <input className={`col-12 ${errors.password && 'is-invalid'}`}  type={passwordShow ? "text" : "password"} placeholder='Password'
                                            name='password'
                                            autoComplete="off"
                                            onChange={handleChange} 
                                            required/>
                                            <FontAwesomeIcon onClick={passwordEye} className='eye_icon' icon={passwordShow ? faEye : faEyeSlash} />
                                            {/* <FontAwesomeIcon className='eye_icon' icon={faEye} /> */}
                                        </div>
                                        {errors.password && (
                                            <span className="error invalid-feedback">{errors.password}</span>
                                        )}
                                        {/* <input className='login_submit' type="submit" value="Login" disabled /> */}
                                        {/* ========= remove below anchor tag ========== */}
                                        <input type="submit" value="Login"/>
                                    </form>
                                </div>
                                <div className='slice_login_form_foot'>
                                    <Link to="/signup">SignUp</Link>
                                    <Link to="/forget_password">Forget Password ?</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}