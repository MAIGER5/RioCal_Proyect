import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Checkbox, Dialog, DialogContent, FormControlLabel, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { postFormActions } from '../../Redux/Actions/postFormActions';

const currencies = [
    {
      value: '',
      label: '',
    },
    {
      value: 'Comercial',
      label: 'Comercial',
    },
    {
      value: 'Despachos',
      label: 'Despachos',
    },
    {
      value: 'Financiero',
      label: 'Financiero',
    },
    {
      value: 'Calidad',
      label: 'Calidad',
    },
];

const industries = [
    {
        value: '',
        label: '',
    },  
    {
      value: 'Agricola',
      label: 'Agricola',
    },
    {
      value: 'Quimca',
      label: 'Química',
    },
    {
      value: 'IngCivil&Const',
      label: 'Ing. Civil & Constgeni',
    },
    {
      value: 'Metalurgica',
      label: 'Metalúrgica',
    },
    {
      value: 'NoFerrosos',
      label: 'No Ferrosos',
    },
    {
      value: 'TratamientoGases',
      label: 'Tratamiento de Gases',
    },
    {
      value: 'PapelPulpa',
      label: 'PCC & Papel',
    },
    {
      value: 'MedioAmbiente',
      label: 'Medio Ambiente',
    },
    {
      value: 'Otro',
      label: 'Otro',
    },
    {
      value: 'Ninguna',
      label: 'Ninguna',
    },
];

const nacionalidades = [
    {
        value: '',
        label: '',
    },  
    {
      value: 'Colombia',
      label: 'Colombia',
    },
    {
      value: 'Estados Unidos',
      label: 'Estados Unidos',
    },
    {
      value: 'Ecuador',
      label: 'Ecuador',
    },
    {
      value: 'Perú',
      label: 'Perú',
    },
    {
      value: 'Chile',
      label: 'Chile',
    },
    {
      value: 'Brasil',
      label: 'Brasil',
    },
    {
      value: 'Otros',
      label: 'Otros',
    },
];



export const FormularioContacto = () => {

  const dispatch = useDispatch()

  const [boxEmerg, SetBoxEmerg] = useState(false);

  const [form, setForm] = useState({
    nombres:"",
    apellidos:"",
    nacionalidad:'',
    industria:"",
    compania:'',
    areaRequerimiento:'',
    telefono:'',
    email:'',
    mensaje:'',
    consentimientoCorreo:""
  });

    const handleForm = (event) => {
        event.preventDefault();

        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})


    }

    const handleSumit = (event)=> {
      event.preventDefault()
      console.log(form)
      dispatch(postFormActions(form))


      SetBoxEmerg(true)
    }

  function handleClose() {
    SetBoxEmerg(false);
    setForm({
      nombres:"",
      apellidos:"",
      nacionalidad:'',
      industria:"",
      compania:'',
      areaRequerimiento:'',
      telefono:'',
      email:'',
      mensaje:'',
      consentimientoCorreo:""

    });
    // window.location.reload();
  }

  return (
    <Stack onSubmit={handleSumit} width={'100%'}
        spacing={4} 
        component={'form'}
        sx={{
            zIndex:1,
            // position: 'absolute',
            // top:'1100px',
            // left:'100px',
            margin:'auto',
            '& .MuiTextField-root':{
                width:'47%',
            },
        }}
    >
        <Stack direction={'row'} spacing={3}>
            <TextField 
                type='text'
                name='nombres'
                value={form.nombres}
                required
                label={ form.nacionalidad!=='Estados Unidos'? 'Nombre': 'Name'}
                onChange={handleForm}
            />
            <TextField 
                type='text'
                name='apellidos'
                value={form.apellidos}
                required
                label={ form.nacionalidad!=='Estados Unidos'? 'Apellidos': 'Last Name'}
                onChange={handleForm}

            />
        </Stack>
        <Stack direction={'row'} spacing={3}>
          <TextField
              type='text'
              name='nacionalidad'
              value={form.nacionalidad}
              defaultValue=''
              label={ form.nacionalidad!=='Estados Unidos'? 'Nacionalidad': 'Nationality'}
              select
              SelectProps={{native:true}}
              size=''
              onChange={handleForm}

            >
              {nacionalidades.map((option) => (
                  <option key={option.value} value={option.value}>
                      {option.label}
                  </option>
              ))}
            </TextField>

            <TextField
                type='text'
                name='industria'
                value={form.industria}
                defaultValue={''}
                label={ form.nacionalidad!=='Estados Unidos'? 'Seleccione la Industria': 'Select a Industry'}
                select
                SelectProps={{native:true}}
                size=''
                onChange={handleForm}

            >
                {industries.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                
            </TextField>
        </Stack>
        <Stack direction={'row'} spacing={3}>
            
        <TextField 
                type='text'
                name='compania'
                value={form.compania}
                label={ form.nacionalidad!=='Estados Unidos'? 'Compañia': 'Company'}
                onChange={handleForm}

            />

            <TextField
                type='text'
                name='areaRequerimiento'
                value={form.areaRequerimiento}
                defaultValue=''
                label={ form.nacionalidad!=='Estados Unidos'? 'Seleccione el Área a contactar': 'Select Contact Area'}
                select
                SelectProps={{native:true}}
                size=''
                onChange={handleForm}

            >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                
            </TextField>
                
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField 
                type='number'
                name='telefono'
                value={form.telefono}
                required
                label={ form.nacionalidad!=='Estados Unidos'? 'Número de Teléfono': 'Telephone Number'}
                InputProps={{
                    startAdornment: <InputAdornment position='start'>{ 
                      form.nacionalidad ==='Estados Unidos'? '+1':
                      form.nacionalidad ==='Perú'? '+51':
                      form.nacionalidad ==='Ecuador'? '+593':
                      form.nacionalidad ==='Chile'? '+56':
                      form.nacionalidad ==='Brasil'? '+55':
                      form.nacionalidad ==='Colombia'? '+57'
                      :''
                    
                    } </InputAdornment>
                }}
                onChange={handleForm}

                
            />
            <TextField 
                type='email'
                name='email'
                value={form.email}
                required
                label={ form.nacionalidad!=='Estados Unidos'? 'Correo Electrónico': 'Email'}
                onChange={handleForm}

            />
        </Stack>

        <Stack direction={'row'} >
            <TextField 
                type='text'
                name='mensaje'
                value={form.mensaje}
                multiline
                label={ form.nacionalidad!=='Estados Unidos'? 'Mensaje': 'Message'}
                onChange={handleForm}
                sx={{
                    '&.MuiTextField-root': {
                        width: '100%', // Estilo global para los otros TextField
                    },
                }}
            />

        </Stack>
        <FormControlLabel  
          name='consentimientoCorreo'
          defaultChecked='true'
          value={form.consentimientoCorreo}
          control={<Checkbox defaultChecked/>} 
          label= {<Typography color={'#0063b4'}>{ form.nacionalidad!=='Estados Unidos'? 'Acepto recibir correos electrónicos': 'I agree to receive emails'}</Typography>} 
          sx={{
            marginLeft:'150px'
          }}
        />

        <Stack>
            <Button type='submit'
                sx={{
                width:'25%',
                height:'50px',
                background:'#0063b4',
                borderRadius:'30px',
                color:'#ffff',
                fontFamily: 'inherit',
                textTransform:'inherit',
                fontWeight:600,
                marginTop:'50px',
                '&:hover': {
                    backgroundColor: '#50882b',
                    borderColor: '#0062cc',
                    boxShadow: 'none',
                },
                '@media only screen and (max-width:1000px)':{
                  margin:'auto',
                  width:'60%'
                  
                }
                }}
            >
             { form.nacionalidad!=='Estados Unidos'? 'Enviar': 'Submit'}
        </Button>
        </Stack>
        <Dialog onClose={handleClose} open={boxEmerg} maxWidth="md" PaperProps={{ sx: { width: '400px', height:'190', maxWidth: 'none' }}} >
          <DialogContent>
            <Typography align="center" variant="h5" marginBottom={5}>Su mensaje ha sido enviado con éxito</Typography>
            <Typography align="center" variant="body1">Pausado/Activado con exito</Typography>
            <Button onClick={handleClose} variant="contained" sx={{ marginLeft: '140px', marginTop:'40px'}}>Finalizar</Button>
          </DialogContent>
        </Dialog>
    </Stack>
  )
}
