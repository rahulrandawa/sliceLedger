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


export {
    SignUpForm,
    LoginForm,
    LoginOtpForm,
    ForgetPasswordForm,
    ResetPForm
}