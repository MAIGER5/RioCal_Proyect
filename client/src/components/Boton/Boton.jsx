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
        width:'50%',
        height:'15%',
        background:'#0063b4',
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

