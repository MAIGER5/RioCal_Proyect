import styles from './Contacto.module.css'
import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
// 
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

export const Formulario = () => {
  return (
    <Box className={styles.formulario}
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiTypography-root': { 
                color:'#394046',
                fontFamily: 'Oxygen, sans-serif',
                fontStretch:'extra-condensed',
                letterSpacing:'1.1px',
            }
            
          }}
          >
            <div className={styles.containerInput}>
            <br /><br />
              <div className={styles.lineInput}>
                  <TextField
                  className={styles.inpuTextField}
                  required
                  // helperText="Please enter your name"
                  id="outlined-required"
                  label="Nombres"
                  // defaultValue="Names"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  />
                  <TextField
                  className={styles.inpuTextField}
                  required
                  // helperText="Please enter your Last Name"
                  id="outlined-required"
                  label="Apellidos"
                  // defaultValue="Apellidos"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  />
              </div>
              <br /><br />
              <div className={styles.lineInput}>
                  <TextField
                  className={styles.inpuTextField}
                  // helperText="Please enter your Company"
                  // required
                  id="outlined-required"
                  label="Compañia"
                  // defaultValue="Company"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  />
                  <TextField
                  className={styles.inpuTextField}
                  // required
                  // helperText="Please enter your position"
                  id="outlined-required"
                  label="Posición"
                  // defaultValue="Position"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  />
              </div>
              <br /><br />
              <div className={styles.lineInput}>
                  <TextField
                  className={styles.inpuTextField}
                  required
                  // helperText="Please enter your number"
                  id="outlined-required"
                  label="Teléfono"
                  // defaultValue="Phone number"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  />
                  <TextField
                  className={styles.inpuTextField}
                  required
                  // helperText="Please enter your mail"
                  id="outlined-required"
                  label="Correo Electrónico"
                  // defaultValue="Email"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  />
              </div>
              <br /><br />
              <div className={styles.lineInput}>
                  <TextField
                  className={styles.inpuTextField}
                  id="outlined-select-currency"
                  select
                  label="Área de Requerimiento"
                  defaultValue="Comercial"
                  // helperText="Please select your currency"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  >
                  {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                  ))}
                  </TextField>
                  <TextField
                  className={styles.inpuTextField}
                  id="outlined-select-currency-native"
                  select
                  label="País"
                  defaultValue="Colombia"
                  SelectProps={{
                      native: true,
                  }}
                  // helperText="Please select your country"
                  sx={{
                    width:'45ch',
                    m:2
                  }}
                  >
                  {paises.map((option) => (
                      <option key={option.value} value={option.value}>
                      {option.label}
                      </option>
                  ))}
                  </TextField>
              </div>
              <br /><br />
              <div className={styles.lineInput}>
                <TextField
                  // required
                  multiline
                  rows={9}
                  // helperText="Please enter your mail"
                  id="outlined-required"
                  label="Mensaje"
                  // defaultValue="Email"
                  sx={{
                    width:'84ch',
                  }}
                  />
              </div>
              <br /><br />
            </div>
            <FormControlLabel 
                control={<Checkbox defaultChecked/>} 
                label= {<Typography>Acepto recibir correos electrónicos</Typography>} 
                sx={{
                  marginLeft:'150px'
                }}
            />
            <Button 
              sx={{
                width:'15%',
                height:'40px',
                background:'#0063b4',
                borderRadius:'80px',
                color:'#ffff',
                fontFamily:'Oxygen, sans-serif',
                textTransform:'inherit',
                fontWeight:600,
                marginLeft:'150px',
                marginTop:'50px',
                '&:hover': {
                    backgroundColor: '#50882b',
                    borderColor: '#0062cc',
                    boxShadow: 'none',
                },
              }}
            >Enviar</Button>
            
          </Box>
  )
}
