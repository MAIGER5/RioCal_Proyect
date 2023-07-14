
const Industrias = [ 'Mineria', 'Agriocultura', 'Métalugica', 'Construcción', 'Infraestructura', 'Alimentaria', 'Servicios Públicos']

export const AcordeonIndustrias = () => {

  
  const lisItems = Industrias.map((ele, index)=> 
    <li key={index}> {ele} </li>
  )

  return (
    <ul>
      {lisItems}
    </ul>
  )
}
