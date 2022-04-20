export default function validate(values) {
    let errors = {};
    if (!values.docType) {
      errors.docType = 'Please Select Your Document';
    } 

    if (!values.frontDoc) {
        errors.frontDoc = 'Please upload Front Docs ';
    } 

    if (!values.backDoc) {
        errors.back_doc = 'Please upload Back Docs ';
    } 

    if (!values.selfie) {
        errors.selfie = 'Please upload Selfie';
    } 



 
    return errors;
  };