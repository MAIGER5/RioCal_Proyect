
import React from 'react'
import env from '../../../../env'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = { 
  lat: 6.2059148616769395, 
  lng: -75.56895451177074,
};

const title = "RIO CAL"

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: env.GOOGLE_MAPS_APY_KEY
  })

  const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <Marker
          position={center}
          // label={title}
          
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)












// import React from 'react';
// import './styles.css'
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// const Map = () => {
//   const mapStyles = {
//     height: '800px',
//     width: '100%',
//   };

//   const defaultCenter = {
//     lat: 6.19252825890508,  
//     lng:  -75.592679,
//   }; // Ubicación de San Francisco, CA como ejemplo

//   const Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mz-7iIpmaM2IEvT-CQtVF3vVDSMkEon5XoUMqKy32CVRyxL_xQ1pGBwIoIeiHqxsJw8&usqp=CAUg'

//   return (
//     <LoadScript
//       googleMapsApiKey='AIzaSyBNgxYQr3IuKmcb4Tgask5L_nIycz1gBng'
//     >
//     <GoogleMap
//       mapContainerStyle={mapStyles}
//       zoom={18}
//       center={defaultCenter}
//     >
//       <Marker  
//         position={defaultCenter}
//       />
//     </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;





// import React, { useState } from "react";
// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 41.881832, lng: -87.623177 }
//   },
//   {
//     id: 2,
//     name: "Denver, Colorado",
//     position: { lat: 39.739235, lng: -104.99025 }
//   },
//   // {
//   //   id: 3,
//   //   name: "Los Angeles, California",
//   //   position: { lat: 34.052235, lng: -118.243683 }
//   // },
//   // {
//   //   id: 4,
//   //   name: "New York, New York",
//   //   position: { lat: 40.712776, lng: -74.005974 }
//   // }
// ];

// function Map() {
//   const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };

//   const handleOnLoad = (map) => {
//     const bounds = new window.google.maps.LatLngBounds();  // Use window.google.maps
//     markers.forEach(({ position }) => bounds.extend(position));
//     map.fitBounds(bounds);
//   };

//   return (
//     <GoogleMap
//       onLoad={handleOnLoad}
//       onClick={() => setActiveMarker(null)}
//       mapContainerStyle={{ width: "100vw", height: "100vh" }}
//     >
//       {markers.map(({ id, name, position }) => (
//         <Marker
//           key={id}
//           position={position}
//           onClick={() => handleActiveMarker(id)}  // Pass the whole marker object here
//         >
//           {activeMarker === id ? (
//             <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//               <div>{name}</div>
//             </InfoWindow>
//           ) : null}
//         </Marker>
//       ))}
//     </GoogleMap>
//   );
// }

// export default Map;