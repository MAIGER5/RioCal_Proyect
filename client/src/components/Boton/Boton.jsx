import { Button } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import VerifiedIcon from '@mui/icons-material/Verified';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { NavLink } from 'react-router-dom';


export const Boton = () => {
  return (
    <Button  component={NavLink} to={'/Contacto'}
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
    <Button  component={NavLink} to={'/Contacto'}
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
    <Button  component={NavLink} to={'/Contacto'}
      sx={{
        width:'70%',
        height:'10%',
        background:'#0067B3',
        borderRadius:'80px',
        color:'#ffff',
        marginTop:'25px',
        '&:hover': {
          backgroundColor: '#61993b',
          borderColor: '#0062cc',
          boxShadow: 'none',
      },
      }}
    >Crece con Nosotros</Button>
  )
}
export const Boton31 = () => {
  return (
    <Button  component={NavLink} to={'/Contacto'}
      sx={{
        width:'70%',
        height:'10%',
        background:'#61993b',
        borderRadius:'80px',
        color:'#ffff',
        marginTop:'25px',
        '&:hover': {
          backgroundColor: '#0067B3',
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
    <Button  component={NavLink} to={'/Contacto'}
      sx={{
        width:'25%',
        height:'25%',
        background:'#0e4083',
        color:'#fafafa',
        marginTop:'25px',
        '&:hover': {
          backgroundColor: '#fafafa',
          borderColor: '#0e4083',
          color:'#0e4083',
          fontWeight:600,
          boxShadow: 'none',
      },
      }}
    >haz crecer tu negocio</Button>
  )
}

export const Boton6 = () => {
  return (
    <Button variant='text' component={NavLink} to={'/Contacto'}
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

export const Boton7 = () => {
  return (
    <Button variant='text' startIcon={<StoreIcon sx={{ color: 'red', fontSize:50 }}/>}
      sx={{
        // width:'20%',
        // height:'20%',
        marginLeft:'150px',
        // background:'forestgreen',
        color:'#fafafa',
        '&:hover': {
          color:'#fafafa',
          fontWeight:600
      },
      }}
    >PROMICAL</Button>
  )
}
export const Boton8 = () => {
  return (
    <Button variant='text' startIcon={<StoreIcon sx={{ color: 'red', fontSize:1000 }} />}
      sx={{
        // width:'20%',
        // height:'20%',
        marginLeft:'150px',
        fontSize:'inherit',
        // background:'forestgreen',
        color:'#fafafa',
        '&:hover': {
          color:'#fafafa',
          fontWeight:600
      },
      }}
    >PROCECAL</Button>
  )
}

export const Boton9 = () => {
  return (
    <Button component={NavLink} to={'/Contacto'}
        sx={{
            width:"150px",
            height:'40px',
            background:'#79b353',
            borderRadius:'3px',
            color:'white',
            fontWeight:600,
            '&:hover': {
                backgroundColor: '#50882b',
                // borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    >Contactanos</Button>
  )
}
export const Boton10 = () => {
  return (
    <Button component={NavLink} to={'/Contacto'}
        sx={{
            width:"290px",
            height:'40px',
            // background:'white',
            borderRadius:'3px',
            color:'white',
            border:'1px solid white',
            fontWeight:600,
            '&:hover': {
                backgroundColor: '#50882b',
                // borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    >Llama Ahora +57 356214528</Button>
  )
}
export const Boton11 = () => {
  return (
    <Button component={NavLink} to={'/Contacto'}
        sx={{
            width:"120px",
            height:'30px',
            background:'#2b4353',
            borderRadius:'3px',
            color:'white',
            fontWeight:400,
            fontSize:'10px',
            marginLeft:'15px',
            '&:hover': {
                backgroundColor: '#50882b',
                // borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    >Contactanos</Button>
  )
}

export const Boton12 = () => {
  return (
    <Button 
        sx={{
            width:"50px",
            height:'50px',
            background:'white',
            borderRadius:'3px',
            color:'#596e79',
            fontWeight:600,
            fontSize:'12px',
            '&:hover': {
                backgroundColor: '#50882b',
                // borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    ><StackedLineChartIcon/></Button>
  )
}
export const Boton13 = () => {
  return (
    <Button 
        sx={{
            width:"50px",
            height:'50px',
            background:'white',
            borderRadius:'3px',
            color:'#596e79',
            fontWeight:600,
            fontSize:'12px',
            '&:hover': {
                backgroundColor: '#50882b',
                // borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    ><VerifiedIcon/></Button>
  )
}
export const Boton14 = () => {
  return (
    <Button 
        sx={{
            width:"50px",
            height:'50px',
            background:'white',
            borderRadius:'3px',
            color:'#596e79',
            fontWeight:600,
            fontSize:'12px',
            marginTop:'8px',
            '&:hover': {
                backgroundColor: '#50882b',
                // borderColor: '#0062cc',
                boxShadow: 'none',
                color:'white'
        },
        }}
    ><RecyclingIcon/></Button>
  )
}



