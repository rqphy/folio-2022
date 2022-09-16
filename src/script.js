import Experience from './Experience/Experience'
import { addScrollAnimations } from './Experience/Scroll'
import lax from 'lax.js'

const experience = new Experience(document.querySelector('canvas.hero__webgl'))

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    addScrollAnimations()
}
console.log('testtt')