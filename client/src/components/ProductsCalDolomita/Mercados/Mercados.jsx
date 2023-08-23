import { Box, Paper, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import styles from './Mercados.module.css'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import HouseIcon from '@mui/icons-material/House';


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
                        fontSize:'60px',
                        transition: 'background 1s',
                        textDecoration:'none',
                        '&:hover': {
                            background: '#5585b5',
                            color:'#fafafa',
                            '& .MuiTypography-root': { 
                                color:'#fafafa',
                            },
                            '& .IconClass': {
                                color: '#fafafa',
                            },

                        },
                    },
                    '& .MuiTypography-root': { 
                        fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                        fontSize:'22px',
                        // fontWeight:'li',
                        fontStretch:'ultra-condensed',
                        letterSpacing:'0.5px',
                        lineHeight:'30.96px',
                        color:'#265c9e',
                        transition:'color 0.6s'
                        
                    },
                    '& .IconClass': {
                        fontSize: 'inherit',
                        color: '#47525c',
                        transition:'color 0.6s'
                    },

                }}
                >

                <Paper component={NavLink} to={'/IngCivilConst'}>
                    <EngineeringOutlinedIcon className='IconClass'/>
                    <Typography>Ing. Civil & Const.</Typography>
                </Paper>
                <Paper component={NavLink} to={'/IngCivilConst'}>
                    <HouseIcon className='IconClass'/>
                    <Typography>Material de<br />Construcción</Typography>
                </Paper>

            </Box>
        </div>
    </div>
  )
}
