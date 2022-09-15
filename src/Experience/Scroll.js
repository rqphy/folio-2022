import lax from 'lax.js'

export const addScrollAnimations = () =>
{
    lax.addElements(
        '.laxScale', 
        {
            scrollY:
            {
                scale:
                [
                    ["elInY-100", "elCenterY-100"],
                    [0.5, 1],
                ],
                opacity:
                [
                    ["elInY-100", "elCenterY-100"],
                    [0, 1],
                ]
            }
        }
    )
}