import lax from 'lax.js'

// skewX: [
//     ["elInY", "elCenterY"],
//     [0, 1],
//   ]

export const addScrollAnimations = () =>
{
    lax.addElements(
        '.laxScale', 
        {
            scrollY:
            {
                scale:
                [
                    ["elInY", "elCenterY"],
                    [0, 1],
                ]
            }
        }
    )
}