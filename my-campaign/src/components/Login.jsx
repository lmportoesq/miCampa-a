function Login() {
    return (
        <div className='container mx-auto my-auto w-3/4'>
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg'>
                <h1 className='shadow-md '>Login</h1>
                <input className='border rounded border-black p-1' type="email" placeholder="Email"/>
                <input className='border rounded border-black p-1' type="password" placeholder="Password"/>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Login;
