import React, { useEffect } from 'react';
import { useDispatch,useSelector} from "react-redux";
import { getCurrentUser } from '../../redux/features/auth/authActions';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token') && !user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  if (localStorage.getItem('token')) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;