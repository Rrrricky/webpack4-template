import './css/style.styl'
import Toto from './js/Toto.js'
import image from './images/image.png'

console.log('hello webpack')

const toto = new Toto()

const $img = new Image()
$img.src = image
document.body.appendChild($img)



if(module.hot) { // Check if active
  module.hot.accept() // Allows hot reloading
  module.hot.dispose(() => 
  {
    console.log('dispose') // Warn when hot reload made
  })
}