export default function validate(values) {
    let errors = {};

    if (!values.otp) {
        errors.otp = 'OTP filed is required';
    }else if (values.otp.length != 4) {
        errors.otp = 'Please Enter 4 Digit OTP';
    } 

    return errors;
  };