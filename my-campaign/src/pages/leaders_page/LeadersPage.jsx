import LeadersRow from '../../components/leaders_row/LeadersRow'
import clienteAxios from '../../config/axios'
import { useEffect, useState } from 'react'
import GetHome from '../../components/get_home/GetHome'
import Footer from '../../components/footer/Footer'
import Swal from 'sweetalert2'
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Button
} from '@mui/material'

function Leaders () {
  const profile = JSON.parse(localStorage.getItem('profile'))
  const id = profile.campaign_id
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    campaign: profile.campaign_id,
    docIdent: '',
    leaderType: '',
    phoneNumber: '',
    adress: '',
    photo: ''
  }
  const [data, setData] = useState([])
  const [body, setBody] = useState(initialState)
  const [openDialog, setOpenDialog] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const consultarAPI = async () => {
    const consultaClientes = await clienteAxios.get(
      `/api/users?role=leader&campaign=${id}`
    )
    setData(consultaClientes.data)
  }

  useEffect(() => {
    consultarAPI()
  }, [data])

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Eliminar',
      text: '¿Esta seguro de eliminar el usuario?',
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
      const res = await clienteAxios.delete(`/api/users/${id}`)
      if (res.status === 200) {
        Swal.fire({
          text: 'Usuario eliminado exitósamente',
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
    await clienteAxios.post('/api/users', body).then((res) => {
      if (res.data.code === 11000) {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: 'Usuario ya fue registrado...'
        })
      } else {
        Swal.fire(
          'Usuario agregado corréctamente, se ha enviado un correo para su activación.',
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

  const onEdit = async () => {
    const id = body._id
    try {
      await clienteAxios.patch(`/api/users/${id}`, body)
      setOpenDialog(false)
      setBody(initialState)
      updateList()
    } catch (error) {
      console.log(error)
    }
  }

  const updateList = async () => {
    await clienteAxios.get('/api/users', data)
    setData(data)
  }

  const editUser = (dataUser) => {
    setIsEdit(true)
    setBody(dataUser)
    setOpenDialog(true)
    console.log('Estory en edit user...')
  }

  const handleAdd = () => {
    setOpenDialog(true)
    setIsEdit(false)
  }

  return (
    <>
      <Dialog maxWidth='xs' open={openDialog} onClose={handleDialog}>
        <DialogTitle>
          {isEdit ? 'Editar líder' : 'Crear nuevo líder'}
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
                name='email'
                value={body.email}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
                label='Email'
                type='email'
              />
            </Grid>
            <Grid item xs={10} sm={12}>
              <InputLabel id='lider'>Tipo de líder</InputLabel>
              <Select
                labelId='lider'
                id='lider'
                margin='normal'
                name='leaderType'
                value={body.leaderType}
                onChange={onChange}
                variant='outlined'
                size='small'
                color='primary'
                fullWidth
              >
                <MenuItem value={'Aspirante al concejo'}>
                  Aspirante al concejo
                </MenuItem>
                <MenuItem value={'Comunitario'}>Comunitario</MenuItem>
                <MenuItem value={'Otro'}>Otro</MenuItem>
              </Select>
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
        <h1 className='title'>Listado de líderes</h1>
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
              <th>Tipo de líder</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <LeadersRow
                key={item._id}
                data={item}
                confirmDelete={confirmDelete}
                editUser={editUser}
              />
            ))}
          </tbody>
        </table>
        <h2 className='main-list__footer'>Total líderes: {data.length}</h2>
        <Footer />
      </div>
    </>
  )
}
export default Leaders
