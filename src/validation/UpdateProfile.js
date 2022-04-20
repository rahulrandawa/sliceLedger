export default function validate(values) {
    let errors = {};
    console.log("values.first_name", !values.first_name);
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

   

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number filed is required';
    } else if (!/^-?\d*$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Please enter only digits';
    } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 15) {
        errors.phoneNumber = 'Please enter no more than 8 and less than 11 digits.';
    }

     return errors;
  };