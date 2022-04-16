export default function validate(values) {
    let errors = {};
    if (!values.first_name) {
      errors.first_name = 'First Name filed is required';
    } else if (values.first_name.length > 255) {
        errors.first_name = 'Please Enter Number Less than 255!';
    }

    if (!values.last_name) {
        errors.last_name = 'Last Name filed is required';
    } else if (values.last_name.length > 255) {
        errors.last_name = 'Please Enter Number Less than 255!';
    }

    if (!values.email) {
        errors.email = 'Email filed is required';
    } else if (values.email.length > 255) {
        errors.email = 'Please Enter Number Less than 255!';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Please enter valid Email!';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number filed is required';
    } else if (!/^-?\d*$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Please enter only digits';
    } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 15) {
        errors.phoneNumber = 'Please enter no more than 8 and less than 11 digits.';
    }

    if (!values.password) {
        errors.password = 'Password filed is required';
    } else if (values.password.length < 6 || values.password.length > 100) {
        errors.password = 'Please Enter Number More than 6 And Less Than 100';
    }

    if (!values.cpassword) {
        errors.cpassword = 'Confirm Password filed is required';
    }else if (values.password != values.cpassword) {
        errors.cpassword = "Passwords don't match!";
    }
    if (!values.country) {
        errors.country = 'Country filed is required';
    } 


 
    return errors;
  };