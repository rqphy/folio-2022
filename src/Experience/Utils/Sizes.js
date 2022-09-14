import EventEmitter from './EventEmitter'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.setSize()
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.setSize()
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }

    setSize = () =>
    {
        let width = 0
        let height = 0
        if(window.innerWidth > 860)
        {
            width = window.innerWidth * 0.4
            height = window.innerHeight * 0.8
        } else
        {
            width = Math.min(window.innerWidth, window.innerHeight) * 0.8
            height = Math.min(window.innerWidth, window.innerHeight) * 0.8
        }

        this.width = width
        this.height = height
    }
}