import { userLogin, userRegister } from '../redux/features/auth/authActions';
import store from '../redux/store';

export const handleLogin = (e,email,password,role)=> {
    e.preventDefault()
    try{
        if(!role || !email || !password){
            return alert("Please Provide All Feilds");
        } 
        store.dispatch(userLogin({role,email,password}));
    }catch(error){
        console.log(error);
    }
}

export const handleRegister = (e,name,role,email,password,organizationName,hospitalName,website,address,phone) => {
    e.preventDefault();
    try{
        store.dispatch(userRegister({name,role,email,password,organizationName,hospitalName,website,address,phone}));
    }catch(error){
        console.log(error);
    }
};
