// [{
//     "message": "Data fetched successfully",
//     "data": [
//         {
//             "_id": "63a7122fffcbab8ccedd539a",
//             "name": "Kenil",
//             "exam": [
//                 {
//                     "_id": "63a7113bc68945443ce3478a",
//                     "name": "GK Test 1",
//                     "questions": [
//                         "63a70f62c68945443ce34784",
//                         "63a70f95c68945443ce34786"
//                     ],
//                     "__v": 0
//                 }
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "63a72a4d680d337d6e855eca",
//             "name": "Perin",
//             "exam": [
//                 {
//                     "_id": "63a7113bc68945443ce3478a",
//                     "name": "GK Test 1",
//                     "questions": [
//                         "63a70f62c68945443ce34784",
//                         "63a70f95c68945443ce34786"
//                     ],
//                     "__v": 0
//                 },
//                 {
//                     "_id": "63a729ef680d337d6e855ec8",
//                     "name": "Node js Test (Beginner)",
//                     "questions": [
//                         "63a713b9ffcbab8ccedd539c",
//                         "63a713f6ffcbab8ccedd539e",
//                         "63a728f4680d337d6e855ec4",
//                         "63a7293a680d337d6e855ec6"
//                     ],
//                     "__v": 0
//                 }
//             ],
//             "__v": 0
//         }
//     ]
// }]




// const data = ()=>{
//     console.log("inside")
//     return "string"
// }

// function data()
// {
//     console.log("inside")
//     return "string"
// }
// var x = data()
// console.log(x)

console.log(window.navigator.userAgent)
console.log(window.navigator.appName)
console.log(window.navigator.appVersion)

if(window.navigator.geolocation){

    window.navigator.geolocation.getCurrentPosition(postion =>{

        console.log(postion.coords.latitude)
        console.log(postion.coords.longitude)
        console.log(postion.coords.accuracy)
    
    })
}
console.log(window.navigator.language)
console.log(window.navigator.platform)
