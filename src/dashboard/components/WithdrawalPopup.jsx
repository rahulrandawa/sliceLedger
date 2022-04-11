import React from 'react'
import { Modal } from 'react-bootstrap'
export default function WithdrawalPopup(props) {
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
                    <Modal.Title>INR Withdrawal </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='slice_withdrawal_section'>
                        <div className='withdrawal_Head'>INR Withdraw INR to Your Bank Account </div>
                        <div className='withdrawal_Balance'>
                            <div>₹3,171</div>
                            <div>Current Balance</div>
                        </div>
                        <div className='withdrawal_message'>Money Would be deposited in the following bank account:</div>
                        <div className='withdrawal_account_details'>
                            <table>
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
                                <button className='col-4 btn btn-success' >Withdraw</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
