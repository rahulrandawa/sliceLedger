import React from 'react'
import { Modal } from 'react-bootstrap'
export default function AddFund(props) {
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Fund </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='slice_addFund_section'>
                        <div className='addFund_Head'>Add Fund to your Wallet </div>
                        <div className='addFund_Balance'>
                            <div className='addFund_Balance_value'>₹3,171</div>
                            <div className='current_balance_txt'>Current Balance</div>
                        </div>
                        <form>
                            <div className="addFund_input_amount">
                                <input type="number" placeholder='Enter amount' min={100} max={51000} title='Min. ₹100 - Max ₹51,000' />
                                <span className='note'>Min. ₹100 - Max ₹51,000</span>
                            </div>
                            <div className='addFund_btn'>
                                <p>0% Deposit Fee on Bank Transfer for ₹7500 & Above</p>
                                <input type='submit' value='Next' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
