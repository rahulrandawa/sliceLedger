export default function validate(values) {
    console.log(values.doc_type);
    let errors = {};
    if (!values.doc_type) {
      errors.doc_type = 'Please Select Your Document';
    } 

    if (!values.front_doc) {
        errors.front_doc = 'Please upload Front Docs ';
    } 

    if (!values.back_doc) {
        errors.back_doc = 'Please upload Back Docs ';
    } 

    if (!values.selfie) {
        errors.selfie = 'Please upload Selfie';
    } 



 
    return errors;
  };