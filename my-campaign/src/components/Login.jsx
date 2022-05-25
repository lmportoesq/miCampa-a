function Login() {
    return (
        <div className='container mx-auto w-3/4 mt-15'>
            <form className='shadow-lg shadow-blue-900 mt-15 border-red-300 w-[32rem] h-[20rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg'>
                <h1 className='shadow-md font-bold text-lg'>Login</h1>
                <input className='border rounded border-black p-1 h-12' type="email" placeholder="Email"/>
                <input className='border rounded border-black p-1 h-12' type="password" placeholder="Password"/>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Login;
