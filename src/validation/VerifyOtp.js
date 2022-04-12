export default function validate(values1) {
    let errors1 = {};

    if (!values1.otp) {
        errors1.otp = 'OTP filed is required';
    }else if (values1.otp.length != 4) {
        errors1.otp = 'Please Enter 4 Digit OTP';
    } 

    return errors1;
  };