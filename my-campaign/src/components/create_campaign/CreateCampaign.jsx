import './create_campaign.css'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'

function CreateCampaign () {
  const profile = JSON.parse(localStorage.getItem('profile'))
  const id = profile.campaign_id
  const [data, setData] = useState({})

  const consultarAPI = async () => {
    const campaign = await clienteAxios.get(`api/campaigns/${id}`)
    setData(campaign.data)
  }

  useEffect(() => {
    consultarAPI()
  }, [])

  /*  const handleValidate = () => {
          const { campaignType, candidateName, campaignSlogan, campaignAdress } = data;
          const valido = !campaignType.length || !candidateName.length || !campaignSlogan.length || !campaignAdress.length;
          return valido;
      }; */

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      await clienteAxios.patch(`/api/campaigns/${id}`, data)
      window.history.back()
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Error..'
      })
    }
  }

  return (
    <>
      <div form className='form'>
        <h1 className='title'>Datos de la campaña</h1>
        <p className='paragraph'>
          Por favor diligencia la información solicitada, los campos con
          asteriscos, indican que no deben quedar en blanco
        </p>
        <div className='row'>
          <p className='label'>Nombre del candidato</p>
          <input
            className='input-text'
            type='text'
            name='candidateName'
            value={data.candidateName}
            placeholder='Nombre del candidato'
            onChange={handleInputChange}
          />
        </div>
        <div className='row'>
          <p className='label'>Slogan</p>
          <input
            className='input-text'
            type='text'
            name='campaignSlogan'
            value={data.campaignSlogan}
            placeholder='Slogan de la campaña'
            onChange={handleInputChange}
          />
        </div>
        <div className='row'>
          <p className='label'>Dirección del comando</p>
          <input
            className='input-text'
            type='text'
            name='campaignAdress'
            value={data.campaignAdress}
            placeholder='Dirección del comando'
            onChange={handleInputChange}
          />
        </div>
        <div className='row'>
          <p className='label'>Tipo de campaña</p>
          <select
            name='campaignType'
            value={data.campaignType}
            className='input-text'
            onChange={handleInputChange}
          >
            <option value=''></option>
            <option value='Alcaldía'>Alcaldía</option>
            <option value='Gobernación'>Gobernación</option>
            <option value='Cámara'>Cámara</option>
            <option value='Senado'>Senado</option>
          </select>
        </div>
        <button className='button' type='submit' onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </>
  )
}
export default CreateCampaign
