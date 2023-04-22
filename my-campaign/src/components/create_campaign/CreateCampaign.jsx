import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from '../../config/axios';

function CreateCampaign() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const id=profile.campaign_id;

    const [data, setData] = useState({
        campaignType:'',
        candidateName:'',
        campaignSlogan:'',
        campaignAdress:''
    });

    const handleValidate = () => {
        const { campaignType, candidateName, campaignSlogan, campaignAdress } = data;
        const valido = !campaignType.length || !candidateName.length || !campaignSlogan.length || !campaignAdress.length;
        return valido;
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await clienteAxios.patch(`/api/campaigns/${id}`,data);
            if (res.status === 200) {
                Swal.fire(
                    'Se agregaron los datos de la campaña corréctamente ',
                    'success',
                );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: 'Error..',
            });
        }
    }
    const consultarAPI=async ()=>{
        const res=await clienteAxios.get(`/api/campaigns/${id}`);
        const data = res.data;
        setData(data);
    }

    useEffect(()=>{
        consultarAPI();
    },[]);


    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="title">Datos de la campaña</h1>
                <p className="paragraph">
                    Por favor diligencia la información solicitada, los campos con asteriscos, indican que no deben quedar en blanco
                </p>
                <div className="row">
                    <p className="label">Nombre del candidato</p>
                    <input className='input-text' type="text" name="candidateName" value={data.candidateName} onChange={handleInputChange} />
                </div>
                <div className="row">
                    <p className="label">Slogan</p>
                    <input className='input-text' type="text" name="campaignSlogan" value={data.campaignSlogan} onChange={handleInputChange} />
                </div>
                <div className="row">
                    <p className="label">Dirección del comando</p>
                    <input className='input-text' type="text" name="campaignAdress" value={data.campaignAdress} onChange={handleInputChange} />
                </div>
                <div className="row">
                    <p className="label">Tipo de campaña</p>
                    <select name="campaignType" className='input-text'value={data.campaignType} onChange={handleInputChange}>
                        <option value=""></option>
                        <option value="Alcaldía">Alcaldía</option>
                        <option value="Gobernación">Gobernación</option>
                        <option value="Cámara">Cámara</option>
                        <option value="Senado">Senado</option>
                    </select>
                </div>
                <button className="button" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </>
    )
}
export default CreateCampaign;
