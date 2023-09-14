import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, InputAdornment, Stack, TextField, Typography } from '@mui/material';

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

const paises = [
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

    const [form, setForm] = useState({
        nombres:"",
        apellidos:"",
        indutria:"",
        compania:'',
        telefono:'',
        email:'',
        areaRequerimiento:'',
        pais:'',
        mensaje:'',

    });

    const handleForm = (event) => {
        event.preventDefault();

        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})


    }

  return (
    <Stack 
        spacing={4} 
        component={'form'}
        sx={{
            zIndex:1,
            // position: 'absolute',
            // top:'1100px',
            // left:'100px',
            margin:'auto',
            '& .MuiTextField-root':{
                width:'30ch',
            },
        }}
    >
        <Stack direction={'row'} spacing={3}>
            <TextField 
                type='text'
                name='nombres'
                value={form.nombres}
                required
                label='Name'
                onChange={handleForm}
            />
            <TextField 
                type='text'
                name='apellidos'
                value={form.apellidos}
                required
                label='Apellidos'
                onChange={handleForm}

            />
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField 
                type='text'
                name='compania'
                value={form.compania}
                label='Compañia'
                onChange={handleForm}

            />
            <TextField
                type='text'
                name='industria'
                value={form.industria}
                defaultValue={''}
                label={'Seleccione la Industria'}
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
                type='number'
                name='telefono'
                value={form.telefono}
                required
                label='Teléfono'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>+57 </InputAdornment>
                }}
                onChange={handleForm}

                
            />
            <TextField 
                type='email'
                name='email'
                value={form.email}
                required
                label='Correo Electrónico'
                onChange={handleForm}

            />
        </Stack>
        <Stack direction={'row'} spacing={3}>

            <TextField
                type='text'
                name='areaRequerimiento'
                value={form.areaRequerimiento}
                defaultValue=''
                label={'Seleccione el Área'}
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
            <TextField
                type='text'
                name='pais'
                value={form.pais}
                defaultValue=''
                label={'Seleccione el País'}
                select
                SelectProps={{native:true}}
                size=''
                onChange={handleForm}

            >
                {paises.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
                
        </Stack>
        <Stack direction={'row'} >
            <TextField 
                type='text'
                name='mensaje'
                value={form.mensaje}
                multiline
                label='Mensaje'
                onChange={handleForm}
                sx={{
                    '&.MuiTextField-root': {
                        width: '63ch', // Estilo global para los otros TextField
                    },
                }}
            />

        </Stack>
        <FormControlLabel 
            control={<Checkbox defaultChecked/>} 
            label= {<Typography color={'#0063b4'}>Acepto recibir correos electrónicos</Typography>} 
            sx={{
              marginLeft:'150px'
            }}
        />

        <Stack>
            <Button 
                sx={{
                width:'25%',
                height:'40px',
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
                }}
            >
            Enviar
        </Button>
        </Stack>
    </Stack>
  )
}
