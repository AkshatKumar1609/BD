import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/API';
import { toast } from 'react-toastify';


export const userLogin = createAsyncThunk(
    'auth/login',
    async ({role,email,password},{rejectWithValue})=>{
        try{
            const {data} = await API.post('/auth/login',{role,email,password})
            //store token

            if(data.success){
                localStorage.setItem('token',data.token);
                console.log("Token stored in localStorage:", data.token);
                alert(data.message);
                // REMOVE window.location.replace('/');
            }
            return data;    
        } catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);
            }
        }   
    }
);

export const userRegister=createAsyncThunk(
    'auth/register',
    async({name,role,email,password,organizationName,hospitalName,website,address,phone},{rejectWithValue})=>{
            try{
                const {data}=await API.post('/auth/register',{name,role,email,password,organizationName,hospitalName,website,address,phone})
                if(data?.success){
                    alert("user registered successfully");
                    alert(data.message);
                    window.location.replace('/login');
                }
            }catch(error){
                console.log(error);
                 if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);
            }
            }
    }
);

//current user
export const getCurrentUser=createAsyncThunk(
    'auth/getCurrentUser',
    async (_,{rejectWithValue})=>{
        try{
            const res=await API.get('/auth/current-user');
            if(res?.data){
                return res?.data
            }
        }catch(error){
              console.log(error);
                 if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);
            }
        }
    }
)