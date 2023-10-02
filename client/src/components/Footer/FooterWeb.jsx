import React, from 'react';
import logo from '.././Utils/logo.png';
import styles from './FooterWeb.module.css'
import { Link, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';



export const FooterWeb = () => {


    return (
        <section className={styles.container}>
            <div className={styles.cajas}>
                <div id={styles.cajaDiferente} className={styles.cajasInternas}>
                    <Link to={'/'} className={styles.links}>
                        <div className={styles.Logo}>
                                <img src={logo} alt="logo RioCal" />
                                <p className={styles.logoP}>Member of Carmeuse Group</p>
                        </div>
                    </Link>
                    <p className={styles.socialMedia}>Disfruta nuestras redes Solciales</p>
                    <Box display={'flex'} justifyContent={'space-around'}>
                      <Fab size='small' color="primary" aria-label="add" marginRight='15px'>
                          <LinkedInIcon />
                      </Fab>
                      <Fab size='small' color="info" aria-label="add" marginRight='15px'>
                          <FacebookOutlinedIcon />
                      </Fab>
                      <Fab size='small' aria-label="add" marginRight='15px'>
                          <InstagramIcon />
                      </Fab>
                      <Fab size='small' color="error" aria-label="add" marginRight='15px'>
                          <YouTubeIcon />
                      </Fab>

                  </Box>
                </div>
                <div className={styles.cajasInternas}>
                    <Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'bolder'}>Nuestros Servicios</Typography>
                    <List sx={{ width: '100%', maxWidth: 360 }}>
                        <ListItem>
                          <ListItemAvatar>
                            <AddCircleIcon color='info'/>
                          </ListItemAvatar>
                          <Typography component={NavLink} to={'/RioCalMas'} color={'#fafafa'} fontFamily={'inherit'} marginBottom={'10px'} sx={{textDecoration:'none'}}>Rio Cal +</Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <AddCircleIcon color='info'/>
                          </ListItemAvatar>
                          <Typography component={NavLink} to={'/Industrias'} color={'#fafafa'}y fontFamily={'inherit'} marginBottom={'10px'} sx={{textDecoration:'none'}}>Industrias</Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <AddCircleIcon color='info'/>
                          </ListItemAvatar>
                          <Typography component={NavLink} to={'/Productos'} color={'#fafafa'} fontFamily={'inherit'} marginBottom={'10px'} sx={{textDecoration:'none'}}>Productos</Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <AddCircleIcon color='info'/>
                          </ListItemAvatar>
                          <Typography color={'#fafafa'} fontFamily={'inherit'} marginBottom={'10px'} sx={{textDecoration:'none'}}>Sostenibilidad</Typography>
                        </ListItem>
                    </List>              
                </div>
            </div>
            <div className={styles.cajas}>
                <div id={styles.cajaDiferente} className={styles.cajasInternas}>
                    <Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'bolder'}>RIO CAL +</Typography>
                    <Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'ligther'}>Carmeuse is committed to providing financial support and volunteerism to organizations whose primary focus is to help underprivileged children in need with opportunities in education, </Typography>
                    <Button component={NavLink} to={'/Contacto'}
                        sx={{
                            width:'250px',
                            height:'40px',
                            background:'white',
                            borderRadius:'80px',
                            color:'#3a4750',
                            fontWeight:600,
                            fontFamily:'inherit',
                            '&:hover': {
                                backgroundColor: '#50882b',
                                borderColor: '#0062cc',
                                boxShadow: 'none',
                                color:'white'
                        },
                        }}
                    >Contactanos</Button>
                </div>
                <div className={styles.cajasInternas}>
                    <Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'bolder'}>Información de Contacto</Typography>
                    <List sx={{ width: '100%', maxWidth: 360 }}>
                        <ListItem>
                          <ListItemAvatar>
                            <PhoneIcon color='info'/>
                          </ListItemAvatar>
                          <ListItemText 
                            primary={<Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'bolder'}>Número Teléfono</Typography>}
                            secondary={<Typography color='#007cb9' fontFamily={'inherit'} fontSize={'18px'} fontWeight={'bolder'}>3016404867</Typography>}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <EmailIcon color='info'/>
                          </ListItemAvatar>
                          <ListItemText 
                            primary={<Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'bolder'}>Correo Electrónico</Typography>}
                            secondary={<Typography color='#007cb9' fontFamily={'inherit'} fontSize={'18px'} fontWeight={'bolder'}>Riocal@Riocal.com.co</Typography>}
                          />
                        </ListItem>
                        <ListItem component={NavLink} to={'/MyComponent'}>
                          <ListItemAvatar  >
                            <FmdGoodIcon  color='error' />
                          </ListItemAvatar>
                          <ListItemText 
                            primary={<Typography color={'#fafafa'}y fontFamily={'inherit'} fontWeight={'bolder'}>Ubicación</Typography>}
                            secondary={<Typography color='#007cb9' fontFamily={'inherit'} fontSize={'18px'} fontWeight={'bolder'}>kra 84F # 3d 255</Typography>}
                          />
                        </ListItem>
  
                    </List>       
                </div>
            </div>
        </section>  
    )
}
