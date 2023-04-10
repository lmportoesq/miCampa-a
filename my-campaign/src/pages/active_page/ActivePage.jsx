import {useParams,useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import Welcome from '../../components/Welcome';
const API_URL='http://localhost:3000';

function Active(){
    const {token}=useParams;
    const navigate=useNavigate;
    const active=async()=>{
        const response=await fetch(`${API_URL}/auth/local/verify-account/${token}`);
        const data=await response.json();
        if(data.token){
            localStorage.setItem('token',data.token);
            navigate('/')
        }
    }
    useEffect(()=>{
        active();
    },[]);
    
    return(
        <div>
            <Welcome />
        </div>
    );
}

export default Active;
