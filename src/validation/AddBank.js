export default function validate(values) {
    let errors = {};
    if (!values.acountNumber) {
      errors.acountNumber = 'Account Number filed is required';
    } else if (values.acountNumber.length > 255) {
        errors.acountNumber = 'Please Enter Number Less than 255!';
    }

    if (!values.ifsc) {
        errors.ifsc = 'IFSC Code filed is required';
    } else if (values.ifsc.length > 255) {
        errors.ifsc = 'Please Enter Number Less than 255!';
    }

     return errors;
  };