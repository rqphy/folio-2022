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
                    ["elInY", "elCenterY-100"],
                    [0.5, 1],
                ],
                opacity:
                [
                    ["elInY", "elCenterY-100"],
                    [0, 1],
                ]
            }
        }
    )
}