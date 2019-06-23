import './css/main.styl'
import Toto from './js/Toto.js'
import image from './images/image.png'


// Class
const toto = new Toto()



// Image injection
// const $img = new Image()
// $img.src = image
// document.body.appendChild($img)



// Pug interpolation
// let template = require("./users.pug");
// let locals = {
//   users: [
//     "user1",
//     "user2",
//     "user3",
//     "user4",
//     "user5"
//   ]
// };
// document.querySelector("main").innerHTML = template(locals);




if(module.hot) { // Check if active
  module.hot.accept() // Allows hot reloading
  module.hot.dispose(() => 
  {
    console.log('dispose') // Warn when hot reload made
  })
}


