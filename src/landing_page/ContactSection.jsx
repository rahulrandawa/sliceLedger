import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocation } from "@fortawesome/free-solid-svg-icons"
export default function ContactSection() {
    return (
        <>
            <section className="slice_contact_section" id='contact'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="slice_contact_details">
                                <div className="slice_contact_content">
                                    <div className='contact_us_text'>Contact Us</div>
                                    <h2>Get In Touch</h2>
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aspernatur quae cumque recusandae rerum nulla temporibus, ipsam explicabo maxime vel tempore voluptatum! Dignissimos magni quam repellat sit. Labore, quos hic.</p>
                                    <div className='slice_envelop'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <a href='/'> demo@sliceledger.com</a>
                                    </div>
                                    <div className='slice_phone'>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <a href='/'> +91-00000-00000 </a>
                                    </div>
                                    <div className='slice_location'>
                                        <FontAwesomeIcon icon={faLocation} />
                                        <a href='/'>New York, US, 4520105</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='slice_get_in_touch_form'>
                                <form>
                                    <input className='col-12 my-2 form_name_field' type="text" placeholder='Name'/>
                                    <input className='col-12 my-2 form_email_field' type="text" placeholder='Email'/>
                                    <input className='col-12 my-2 form_subject_field' type="text" placeholder='Subject'/>
                                    <textarea className='col-12 my-2 form_message_field' cols="30" rows="6" placeholder='Message'></textarea>
                                    <input className='form_submit_field' type="submit" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
