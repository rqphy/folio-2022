import './index.scss'
console.log('project1')

import lax from 'lax.js'

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements

    lax.addElements(
        '.hero', 
        {
            scrollY:
            {
                scale:
                [
                    ["elCenterY", "elOutY+100"],
                    [1.1, 0.8],
                ],
            }
        }
    )

    lax.addElements(
        '.title', 
        {
            scrollY:
            {
                translateY:
                [
                    ["elInY", "elCenterY-100"],
                    [-40, 0],
                ],
            }
        }
    )
    lax.addElements(
        '.title', 
        {
            scrollY:
            {
                translateY:
                [
                    ["elInY", "elCenterY-100"],
                    [-40, 0],
                ],
                // translateY:
                // [
                //     ["elInY", "elCenterY-100"],
                //     ['elHeight', 0],
                // ],
                // skewX:
                // [
                //     ["elInY", "elCenterY-100"],
                //     [-20, 0],
                // ],
                // skewY:
                // [
                //     ["elInY", "elCenterY-100"],
                //     [3, 0],
                // ],
            }
        }
    )
}