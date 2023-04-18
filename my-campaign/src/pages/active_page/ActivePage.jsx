import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function activePage() {
    const { hash } = useParams();
    const navigate = useNavigate();

    const active = async ()=>{
        const API_URL = 'http://localhost:8080';
        const response = await fetch(`${API_URL}/auth/local/verify-account/${hash}`);
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/welcome-page')
        }
    }

    useEffect(()=>{
        active();
    },[]);

    return (
       <h1>Activando usuario...</h1>
    );
}

export default activePage;
