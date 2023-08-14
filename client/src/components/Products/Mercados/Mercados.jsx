import { Box, Paper, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';
import styles from './Mercados.module.css'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


export const Mercados = () => {
  return (
    <div id='Mercados' className={styles.contenedor}>
        <h2 className={styles.title}>Relación de Mercados</h2>
        <div className={styles.container}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'row',
                    flexWrap: 'wrap',
                    gap:'16px',
                    // border:'1px solid black',
                    justifyContent: 'flex-start', // Centra horizontalmente
                    '& > :not(style)': {
                    m: 1,
                    width: 200,
                    height: 200,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center', 
                    alignItems:'center',
                    background:'#fafafa',
                    fontSize:'60px'

                    },
                }}
                >
                
                <Paper elevation={1} className={styles.paper} component={NavLink} to={'/Agricultura'} sx={{textDecoration:'none'}}>
                    <AgricultureIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'li',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >Agricultura</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <ScienceOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >Químico</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <EngineeringOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >Ing. Civil & Const.</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <WaterDropOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >Medio Ambiente</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <GasMeterOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >Tratamiento de Gas</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <ConfirmationNumberOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >Hierro & Acero</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <ConfirmationNumberOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >No Ferrosos</Typography>
                </Paper>
                <Paper elevation={1} component={NavLink} to={'/'} sx={{textDecoration:'none'}}>
                    <DescriptionOutlinedIcon color='action' fontSize='inherit'/>
                    <Typography 
                        sx={{
                            fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                            fontSize:'22px',
                            // fontWeight:'bold',
                            fontStretch:'ultra-condensed',
                            letterSpacing:'0.5px',
                            lineHeight:'39.96px',
                            color:'#0063b4'
                        }}
                    >PCC & Papel</Typography>
                </Paper>

            </Box>
        </div>
    </div>
  )
}
