import React from 'react';
import styles from './TarjetaIndustria.module.css'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import agricola from '../../../../utils/agriculture2.jpg'
import quimica from '../../../../utils/agriculture2.jpg'
import ingenieria from '../../../../utils/agriculture2.jpg'
import ambiente from '../../../../utils/agriculture2.jpg'
import gases from '../../../../utils/agriculture2.jpg'
import metalurgica from '../../../../utils/agriculture2.jpg'
import noFerrosos from '../../../../utils/agriculture2.jpg'
import papel from '../../../../utils/agriculture2.jpg'

import { TarjetaIndustria } from './TarjetaAgricola';

const industries = [
    {
        id:1,
        name:'Agrícola',
        icon: <AgricultureIcon className='IconClass'/>,
        image:'../../../../utils/agriculture2.jpg'
    }, 
    {
        id:2,
        name:'Química',
        icon: <ScienceOutlinedIcon className='IconClass'/>,
        image:{quimica}
    }, 
    {
        id:3,
        name:'Ingenieria Civil & Construcción',
        icon: <EngineeringOutlinedIcon className='IconClass'/>,
        image:{ingenieria}
    }, 
    {
        id:4,
        name:'Medio Ambiente',
        icon: <WaterDropOutlinedIcon className='IconClass'/>,
        image:{ambiente}
    }, 
    
    {
        id:5,
        name:'Tratamiento de Gases',
        icon: <ConfirmationNumberOutlinedIcon className='IconClass'/>,
        image:{gases}

    }, 
    {
        id:6,
        name:'Métalurgica',
        icon: <GasMeterOutlinedIcon className='IconClass'/>,
        image:{metalurgica}
    }, 
    {
        id:7,
        name:'No Ferrosos',
        icon: <DescriptionOutlinedIcon className='IconClass'/>,
        image:{noFerrosos}
    }, 
    {
        id:8,
        name:'PCC & Papel',
        icon: <DescriptionOutlinedIcon/>,
        image:{papel}
    }
    
]

export const TarjetaIndustriaMap = () => {
  return (
    <div className={styles.contenedor}>
        {industries.map((ind) => (
           <TarjetaIndustria
                key={ind.id}
                name = {ind.name}
                icon={ind.icon}
                image={ind.image}
           />
        ))}
    </div>
  );
}
