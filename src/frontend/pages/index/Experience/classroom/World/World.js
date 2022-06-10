import Experience from '../Experience.js'
import Classroom from './Classroom.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.classroom = new Classroom()
        })
    }

    update()
    {
        if(this.classroom)
        {
            this.classroom.update()
        }
    }
}