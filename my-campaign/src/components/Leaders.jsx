import MenuQueries from '../components/MenuQueries';
import Footer from '../components/Footer';

import LeadersPage from '../pages/LeadersPage';

function Leaders() {
    const dataLeaders = [
        {
            "cedula": "73154812",
            "nombre": "Luis Miguel",
            "ciudad": "Cartagena",
            "municipio": "Turbaco",
            "direccion": "Av. 45 No.1845",
            "telefono": "316-9997654",
            "tipo": "concejal"
        },
        {
            "cedula": "73154856",
            "nombre": "Jose Perez",
            "ciudad": "Cartagena",
            "municipio": "Arjona",
            "direccion": "Cra. 25 No.1845",
            "telefono": "312-9878654",
            "tipo": "concejal"
        },
        {
            "cedula": "22729384",
            "nombre": "Claudia Puerta",
            "ciudad": "Barranquilla",
            "municipio": "Luruaco",
            "direccion": "Cra. 18 No.18-45",
            "telefono": "3300-9878654",
            "tipo": "concejal"
        },
        {
            "cedula": "2567890",
            "nombre": "Pedro Moreno",
            "ciudad": "Cartagena",
            "municipio": "Arjona",
            "direccion": "Cra. 2 No.2-45",
            "telefono": "312-1178654",
            "tipo": "comunal"
        }
    ]

    return (
        <>
            <MenuQueries />
            <h1 className='shadow-md text-center'>Listado de líderes</h1>
            <div className='grid grid-cols-4 gap-2' >
                {dataLeaders.map(item => (
                    <LeadersPage
                        key={item.cedula}
                        data={item}
                    />
                ))};
            </div>
            <h2 className='text-right'>Total líderes: {dataLeaders.length}</h2>
            <Footer />
        </>
    )
}
export default Leaders;
