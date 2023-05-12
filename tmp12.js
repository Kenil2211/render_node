// const ipLocation = require('iplocation');
const IP = require('ip')
// const ipaddress = IP.address()

// async function getlocation () 
// {

//     const res= await ipLocation(ipaddress);
//     // const data = res.json()
//     console.log("==",res)
//     //=> { latitude: -33.8591, longitude: 151.2002, region: { name: "New South Wales" ... } ... }
// }

// getlocation()
// let nodeGeocoder = require('node-geocoder');
 
// let options = {
//   provider: 'openstreetmap'
// };
 
// let geoCoder = nodeGeocoder(options);
// geoCoder.reverse({lat:23.065084,lon:72.439896}).
// then((res)=> {
//     console.log(res);
//   })
//   .catch((err)=> {
//     console.log(err);
//   });
// geoCoder.geocode('Indus university')
//   .then((res)=> {
//     console.log(res);
//   })
//   .catch((err)=> {
//     console.log(err);
//   });

const device = require('express-device')

console.log("device-info === ",)