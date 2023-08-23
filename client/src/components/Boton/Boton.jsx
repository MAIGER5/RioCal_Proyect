import { Button } from '@mui/material'


export const Boton = () => {
  return (
    <Button 
        sx={{
            width:'50%',
            height:'15%',
            background:'white',
            borderRadius:'80px',
            color:'#3a4750',
            fontWeight:600,
            '&:hover': {
                backgroundColor: '#50882b',
                borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    >Contactanos</Button>
  )
}

export const Boton2 = () => {
  return (
    <Button 
      sx={{
        width:'70%',
        height:'15%',
        background:'#265c9e',
        borderRadius:'80px',
        color:'#ffff',
        '&:hover': {
          backgroundColor: '#50882b',
          borderColor: '#0062cc',
          boxShadow: 'none',
      },
      }}
    >Click para COMPRAR</Button>
  )
}
export const Boton3 = () => {
  return (
    <Button 
      sx={{
        width:'70%',
        height:'10%',
        background:'#265c9e',
        borderRadius:'80px',
        color:'#ffff',
        marginTop:'25px',
        '&:hover': {
          backgroundColor: '#50882b',
          borderColor: '#0062cc',
          boxShadow: 'none',
      },
      }}
    >Crece con Nosotros</Button>
  )
}

export const Boton4 = () => {
  return (
    <Button 
      sx={{
        width:'70%',
        height:'10%',
        background:'#265c9e',
        borderRadius:'80px',
        color:'#ffff',
        marginTop:'25px',
        '&:hover': {
          backgroundColor: '#50882b',
          borderColor: '#0062cc',
          boxShadow: 'none',
      },
      }}
    >Sostenibilidad</Button>
  )
}
