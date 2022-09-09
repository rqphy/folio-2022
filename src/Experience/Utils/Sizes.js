import EventEmitter from './EventEmitter'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.width = window.innerWidth * 0.4
        this.height = window.innerHeight * 0.8
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = window.innerWidth * 0.4
            this.height = window.innerHeight * 0.8
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}