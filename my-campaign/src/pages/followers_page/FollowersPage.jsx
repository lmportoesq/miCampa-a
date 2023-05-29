import FollowersRow from '../../components/followers_row/FollowersRow'
import clienteAxios from '../../config/axios'
import { useEffect, useState } from 'react'
import GetHome from '../../components/get_home/GetHome'
import Footer from '../../components/footer/Footer'
import Swal from 'sweetalert2'
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Button
} from '@mui/material'

function FollowersPage () {
  const profile = JSON.parse(localStorage.getItem('profile'))
  const id = profile.campaign_id

  const leaderID = localStorage.getItem('id')

  const initialState = {
    firstName: '',
    lastName: '',
    campaign: profile.campaign_id,
    leader: leaderID,
    docIdent: '',
    phoneNumber: '',
    adress: '',
    votingTable: ''
  }
  const [data, setData] = useState([])
  const [body, setBody] = useState(initialState)
  const [openDialog, setOpenDialog] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const consultarAPI = async () => {
    const consultaSeguidores = await clienteAxios.get(
      `/api/followers?campaign=${id}`
    )
    setData(consultaSeguidores.data)
  }

  useEffect(() => {
    consultarAPI()
  }, [data])

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Eliminar',
      text: '¿Esta seguro de eliminar el seguidor?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
      }
    })
  }

  const deleteUser = async (id) => {
    try {
      const res = await clienteAxios.delete(`/api/followers/${id}`)
      if (res.status === 200) {
        Swal.fire({
          text: 'Seguidor eliminado exitósamente',
          icon: 'success',
          timer: '3000'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDialog = () => {
    setOpenDialog((prev) => !prev)
  }

  const handleCancel = () => {
    setIsEdit(false)
    setOpenDialog(false)
    setBody(initialState)
  }

  const onChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async () => {
    await clienteAxios.post('/api/followers', body).then((res) => {
      if (res.data.code === 11000) {
        saveRejected()
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: 'Seguidor ya fue registrado...'
        })
      } else {
        Swal.fire(
          'Seguidor agregado corréctamente...',
          res.data.mensaje,
          'success'
        )
        setBody(initialState)
        setOpenDialog(false)
        updateList()
        setIsEdit(false)
      }
    })
  }

  const saveRejected = async () => {
    try {
      await clienteAxios.post('api/rejecteds', body)
    } catch (error) {
      // console.log(error)
    }
  }

  const onEdit = async () => {
    const id = body._id
    try {
      await clienteAxios.patch(`/api/followers/${id}`, body)
      setOpenDialog(false)
      setBody(initialState)
      updateList()
    } catch (error) {
      console.log(error)
    }
  }

  const updateList = async () => {
    await clienteAxios.get('/api/followers', data)
    setData(data)
  }

  const editUser = (dataFollowers) => {
    setIsEdit(true)
    setBody(dataFollowers)
    setOpenDialog(true)
  }

  const handleAdd = () => {
    setOpenDialog(true)
    setIsEdit(false)
  }

  return (
    <>
      <Dialog maxWidth='xs' open={openDialog} onClose={handleDialog}>
        <DialogTitle>
          {isEdit ? 'Editar seguidor' : 'Crear nuevo seguidor'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={0.1}>
            <Grid item xs={10} sm={12}>
              <TextField
                margin='normal'
                name='docIdent'
                value={body.docIdent}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Cédula'
              />
            </Grid>
            <Grid item xs={10} sm={12}>
              <TextField
                margin='normal'
                name='firstName'
                value={body.firstName}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Nombres'
              />
            </Grid>
            <Grid item xs={10} sm={12}>
              <TextField
                margin='normal'
                name='lastName'
                value={body.lastName}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Apellidos'
              />
            </Grid>
            <Grid item xs={10} sm={12}>
              <TextField
                margin='normal'
                name='phoneNumber'
                value={body.phoneNumber}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Teléfono'
              />
            </Grid>
            <Grid item xs={10} sm={12}>
              <TextField
                margin='normal'
                name='adress'
                value={body.adress}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Dirección'
              />
            </Grid>
            <Grid item xs={10} sm={12}>
              <TextField
                margin='normal'
                name='votingTable'
                value={body.votingTable}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Mesa'
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant='text' color='primary' onClick={handleCancel}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={isEdit ? () => onEdit() : () => onSubmit()}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      <GetHome />
      <div className='main-list__container'>
        <h1 className='title'>Listado de seguidores</h1>
        <div>
          <button className='button__small' type='submit' onClick={handleAdd}>
            Agregar
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Mesa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <FollowersRow
                key={item._id}
                data={item}
                confirmDelete={confirmDelete}
                editUser={editUser}
              />
            ))}
          </tbody>
        </table>
        <h2 className='main-list__footer'>Total seguidores: {data.length}</h2>
        <Footer />
      </div>
    </>
  )
}
export default FollowersPage

/*
function FollowersPage({ data }) {
    function handleClick() {
        alert('Diste clic en eliminar...')
    }

    return (
        <>
            <div className="row-list">
                <p className='text-list__bold'>{data.docIdent}</p>
                <p className='text-list__bold'>{data.firstName} {data.lastName}</p>
                <p className='text-list'>{data.adress}</p>
                <p className='text-list'>{data.phoneNumber}</p>
                <p className='text-list'>{data.votingTable}</p>
                <div className='row-list__actions'>
                    <ion-icon name="trash-outline" onClick={handleClick}></ion-icon>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}
export default FollowersPage;
*/
