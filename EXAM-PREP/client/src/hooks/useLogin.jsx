/* eslint-disable no-undef */
import { useState } from "react";
import {message } from 'antd';
import { useAuth } from "../contexts/AuthContext.jsx"

const useLogin = ()=>{
    const {login} = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(null);
    const loginUser = async (value)=>{
        try {
            setLoading(true)
            const res = await fetch('http://localhost:3000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(value),
            })
            setError(null);
            const data = await res.json();
            if(res.status === 200){
                message.success(data.message);
                login(data.token,data.user);
            }
            else if(res.status === 404){
                setError('User Not Found');
            }else{
                setError('Try Again');
            }
        } catch (error) {
            message.error(error);
        }finally{
            setLoading(false);
        }
    }
    return {loading,error,loginUser};
};


export default useLogin