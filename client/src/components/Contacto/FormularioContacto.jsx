import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, InputAdornment, Stack, TextField, Typography } from '@mui/material';

const currencies = [
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
const paises = [
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
    });

    const handleForm = () => {
        
    }

  return (
    <Stack 
        spacing={4} 
        component={'form'}
        sx={{
            // position: 'absolute',
            // top:'1100px',
            // left:'100px',
            margin:'auto',
            '& .MuiTextField-root':{
                width:'30ch'
            },
        }}
    >
        <Stack direction={'row'} spacing={3}>
            <TextField 
                required
                label='Name'
            />
            <TextField 
                required
                label='Apellidos'
            />
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField 
                label='Compañia'
            />
            <TextField 
                label='Posición'
            />
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField 
                required
                label='Teléfono'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>+57 </InputAdornment>
                }}
                
            />
            <TextField 
                required
                label='Correo Electrónico'
            />
        </Stack>
        <Stack direction={'row'} spacing={3}>

            <TextField
                label='Área de Requerimiento'
                defaultValue={'Comercial'}
                select
                SelectProps={{native:true}}
                size=''
            >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            <TextField
                label='País'
                defaultValue={'Colombia'}
                select
                SelectProps={{native:true}}
                size=''
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
                multiline
                label='Área de Requerimiento'
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
