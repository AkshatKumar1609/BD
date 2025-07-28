import React, { useEffect } from 'react'
import Form from '../../components/shared/Form/Form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={'Login Page'} submitBtn={'Login'} formType={'login'}/>
        </div>
      </div>
    </>
  )
}

export default Login
