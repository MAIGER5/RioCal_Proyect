
import React from 'react';
import styles from './MyComponent.module.css'
import Map from "./Map";

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h2>Ubicación Oficinas RioCal Poblado Medellin</h2>
      <Map />
    </div>
  );
};

export default MyComponent;


// import "./styles.css";
// import { useLoadScript } from "@react-google-maps/api";
// // import Credencials from "../../../../Credencials./";
// import Map from "./Map";


// export default function MyComponent() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBNgxYQr3IuKmcb4Tgask5L_nIycz1gBng' // Add your API key
//   });

//   return isLoaded ? <Map /> : null;
// }




