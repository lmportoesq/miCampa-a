import MenuQueries from '../components/MenuQueries';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function FollwersPage() {
    const dataFollowers = [
        {
            "cedula": "73154812",
            "nombre": "Luis Miguel",
            "ciudad": "Cartagena",
            "municipio": "Turbaco",
            "mesa": "23"
        },
        {
            "cedula": "73154856",
            "nombre": "Jose Perez",
            "ciudad": "Cartagena",
            "municipio": "Arjona",
            "mesa": "2"
        },
        {
            "cedula": "22729384",
            "nombre": "Claudia Puerta",
            "ciudad": "Barranquilla",
            "municipio": "Luruaco",
            "mesa": "18"
        },
        {
            "cedula": "2567890",
            "nombre": "Pedro Moreno",
            "ciudad": "Cartagena",
            "municipio": "Arjona",
            "mesa": "2"
        }
    ]

    return (
        <div className='text-center mx-2'>
            <MenuQueries />
            <h1 className='shadow-md'>Listado de seguidores</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Ciudad</th>
                        <th>Municipio</th>
                        <th>Mesa</th>
                    </tr>
                </thead>
                <tbody>
                    {dataFollowers.map((item) => (
                        <tr>
                            <td>{item.cedula}</td>
                            <td>{item.nombre}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.municipio}</td>
                            <td>{item.mesa}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
            <h2 className='text-right'>Total seguidores: {dataFollowers.length}</h2>            
            <Footer />
        </div>
    )
}
export default FollwersPage;
