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
                    ["elCenterY-500", "elCenterY-200"],
                    [0.5, 1],
                ],
                opacity:
                [
                    ["elCenterY-500", "elCenterY-200"],
                    [0, 1],
                ]
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
                    ["elCenterY-400", "elCenterY"],
                    ['elHeight+20', 0],
                ],
                skewX:
                [
                    ["elCenterY-400", "elCenterY"],
                    [-20, 0],
                ],
                skewY:
                [
                    ["elCenterY-400", "elCenterY"],
                    [3, 0],
                ],
            }
        }
    )
}