export default function validate(values) {
    let errors = {};

    if (!values.oldPassword) {
        errors.oldPassword = 'Old Password filed is required';
    } else if (values.password.length < 5 && values.password.length > 100) {
        errors.oldPassword = 'Please Enter Number More than 5 And Less Than 100';
    }

    if (!values.password) {
        errors.password = 'Password filed is required';
    } else if (values.password.length < 5 && values.password.length > 100) {
        errors.password = 'Please Enter Number More than 5 And Less Than 100';
    }

    if (!values.cpassword) {
        errors.cpassword = 'Confirm Password filed is required';
    }
    if (values.password != values.cpassword) {
        errors.cpassword = "Passwords don't match!";
    } 
    return errors;
  };