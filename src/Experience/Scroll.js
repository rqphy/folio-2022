import lax from 'lax.js'

export const addScrollAnimations = () =>
{
    lax.addElements(
        '.laxTranslate', 
        {
            scrollY:
            {
                // scale:
                // [
                //     ["elCenterY-500", "elCenterY-200"],
                //     [0, 1],
                // ],
                translateY:
                [
                    ["elCenterY-500", "elCenterY-200"],
                    [75, 0],
                ],
                opacity:
                [
                    ["elCenterY-500", "elCenterY-200"],
                    [0, 1],
                ],
            }
        }
    )
    lax.addElements(
        '.laxScale', 
        {
            scrollY:
            {
                scale:
                [
                    ["elCenterY-200", "elCenterY-100"],
                    [0.9, 1],
                ],
                opacity:
                [
                    ["elCenterY-200", "elCenterY"],
                    [0, 1],
                ],
            }
        }
    )

    // lax.addElements(
    //     '.title', 
    //     {
    //         scrollY:
    //         {
    //             translateY:
    //             [
    //                 ["elCenterY-400", "elCenterY"],
    //                 ['elHeight+20', 0],
    //             ],
    //             skewX:
    //             [
    //                 ["elCenterY-400", "elCenterY"],
    //                 [-20, 0],
    //             ],
    //             skewY:
    //             [
    //                 ["elCenterY-400", "elCenterY"],
    //                 [3, 0],
    //             ],
    //         }
    //     }
    // )
}