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

export const Boton5 = () => {
  return (
    <Button 
      sx={{
        width:'25%',
        height:'25%',
        background:'forestgreen',
        color:'#fafafa',
        marginTop:'25px',
        '&:hover': {
          backgroundColor: 'rgb(30, 70, 122)',
          borderColor: '#0062cc',
          boxShadow: 'none',
      },
      }}
    >haz crecer tu negocio</Button>
  )
}

export const Boton6 = () => {
  return (
    <Button variant='text'
      sx={{
        width:'20%',
        height:'20%',
        marginLeft:'20px',
        // background:'forestgreen',
        color:'rgb(30, 70, 122)',
        marginTop:'25px',
        '&:hover': {
          color:'#fafafa',
          fontWeight:600
      },
      }}
    >Llama Ahora <br /> +57 356214528</Button>
  )
}