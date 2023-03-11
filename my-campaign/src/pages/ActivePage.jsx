function Active(){
    const {token}=useParams;
    const navigate=useNavigate;
    const active=async()=>{
        const response=await fetch(`${API_URL}/auth/local/verify-account/${token}`);
        const data=await response.json();
        if(data.token){
            localStorage.setItem('token',data.token);
            navigate('/login')
        }
    }
    useEffect(()=>{
        Active();
    },[]);
    
    return(
        <div>
            Bienvenido
        </div>
    );
}

export default Active;
