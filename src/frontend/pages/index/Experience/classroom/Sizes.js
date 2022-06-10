import EventEmitter from '../../../common/Experience/Utils/EventEmitter.js'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.width = window.innerWidth * 0.5
        this.height = window.innerHeight - 50
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = window.innerWidth * 0.5
            this.height = window.innerHeight - 50

            this.trigger('resize')
        })
    }
}