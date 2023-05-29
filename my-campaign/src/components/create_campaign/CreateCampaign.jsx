import './create_campaign.css'
import { React, useState } from 'react'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'

function CreateCampaign () {
  const [data, setData] = useState({
    campaignType: '',
    candidateName: '',
    campaignSlogan: '',
    campaignAdress: ''
  })

  const handleValidate = () => {
    const { campaignType, candidateName, campaignSlogan, campaignAdress } = data
    const valido = !campaignType.length || !candidateName.length || !campaignSlogan.length || !campaignAdress.length
    return valido
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await clienteAxios.post('/api/campaigns', data)
      console.log('La respuesta es...', res)
      if (res.status === 201) {
        Swal.fire(
          'Se agregaron los datos de la campaña corréctamente ',
          res.data.mensaje,
          'success'
        )
      }
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
            <div form className='form' onSubmit={handleSubmit}>
                <h1 className="title">Datos de la campaña</h1>
                <p className="paragraph">
                    Por favor dilegencia la información solicitada, los campos con asteriscos, indican que no deben quedar en blanco
                </p>
                <div className="row">
                    <p className="label">Nombre del candidato</p>
                    <input className='input-text' type="text" name="candidateName" placeholder="Nombre del candidato" onChange={handleInputChange} />
                </div>
                <div className="row">
                    <p className="label">Slogan</p>
                    <input className='input-text' type="text" name="campaignSlogan" placeholder="Slogan de la campaña" onChange={handleInputChange} />
                </div>
                <div className="row">
                    <p className="label">Dirección del comando</p>
                    <input className='input-text' type="text" name="campaignAdress" placeholder="Dirección del comando" onChange={handleInputChange} />
                </div>
                <div className="row">
                    <p className="label">Tipo de campaña</p>
                    <select name="campaignType" className='input-text' onChange={handleInputChange}>
                        <option value=""></option>
                        <option value="Alcaldía">Alcaldía</option>
                        <option value="Gobernación">Gobernación</option>
                        <option value="Cámara">Cámara</option>
                        <option value="Senado">Senado</option>
                    </select>
                </div>
                <button className="button" type="submit" disabled={handleValidate()}>Enviar</button>
            </div>

        </>

  )
}
export default CreateCampaign
