import { useState, useEffect } from 'react';

const SignUpForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};


const LoginForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};


const LoginOtpForm = (callback, validate) => {

  const [values1, setValues] = useState({});
  const [errors1, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors1).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors1]);

  const handleOTPSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values1));
    setIsSubmitting(true);
  };

  const handleOTPChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values1 => ({ ...values1, [event.target.name]: event.target.value }));
  };


  return {
    handleOTPChange,
    handleOTPSubmit,
    values1,
    errors1,
  }
};

const ForgetPasswordForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

const ResetPForm = (callback, validate) => {

  const [values1, setValues] = useState({});
  const [errors1, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors1).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors1]);

  const handleResetSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values1));
    setIsSubmitting(true);
  };

  const handleResetChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values1 => ({ ...values1, [event.target.name]: event.target.value }));
  };


  return {
    handleResetChange,
    handleResetSubmit,
    values1,
    errors1,
  }
};

const AddBankForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  const handleChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

const ChangePForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  const handleChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

const UpdateProfileForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  const handleChange = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

const KycApproveForm = (callback, validate) => {
  


  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("values12345", Object.values(values));
// Iterate through the keys
Object.keys(values).forEach(key => {
  let value = values[key];

 console.log(`${key}: ${value}`);
});
 
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // console.log("KYC",values);
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  const setSelectDocs = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [ event.target.name]: event.target.value}));
   
  };
  const setFrontFile = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [ event.target.name]: event.target.files[0]}));
  
  };
  const setBackFile = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [ event.target.name]:  event.target.files[0]}));
   
  };
  const setSelfieFile = (event) => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({ ...values, [ event.target.name]:  event.target.files[0]}));
   
  };
  return {
    setSelectDocs,
    setFrontFile,
    setBackFile,
    setSelfieFile,
    handleSubmit,
    values,
    errors,
  }
};
export {
    SignUpForm,
    LoginForm,
    LoginOtpForm,
    ForgetPasswordForm,
    ResetPForm,
    AddBankForm,
    ChangePForm,
    UpdateProfileForm,
    KycApproveForm
}