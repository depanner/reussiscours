import * as THREE from 'three'
import Experience from '../Experience.js'
import gsap from 'gsap'

export default class Classroom
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.sizes = this.experience.sizes
        this.time = this.experience.time

        // Setup
        this.currentSection = 0

        this.setTextures()
        this.setMaterial()
        this.setModel()
        
        
    }

    setTextures()
    {
        this.textures = {}

        this.textures.bakedColor = this.resources.items.bakedColor
        this.textures.bakedColor.encoding = THREE.sRGBEncoding
        this.textures.bakedColor.flipY = false

        this.textures.treeBakedColor = this.resources.items.treeBakedColor
        this.textures.treeBakedColor.encoding = THREE.sRGBEncoding
        this.textures.treeBakedColor.flipY = false

        this.textures.treeBakedAlpha = this.resources.items.treeBakedAlpha
        this.textures.treeBakedAlpha.encoding = THREE.sRGBEncoding
        this.textures.treeBakedAlpha.flipY = false
    }

    setMaterial()
    {
        this.material = {}

        this.material.reussiscours = new THREE.MeshBasicMaterial(
            {
                map: this.textures.bakedColor,
                transparent: true,
                alphaTest: 0.001
            }
        )

        this.material.trees = new THREE.MeshBasicMaterial(
            {
                map: this.textures.treeBakedColor,
                alphaMap: this.textures.treeBakedAlpha,
                transparent: true,
                alphaTest: 0.001
            }
        )
    }

    setModel()
    {
        this.model = {}

        this.model.reussiscours = this.resources.items.reussiscours.scene
        this.model.reussiscours.scale.set(0.4, 0.4, 0.4)
        this.model.reussiscours.position.set(1.5, 0, 1)
        //this.model.reussiscours.rotation.y = - 45 * Math.PI / 180
        this.scene.add(this.model.reussiscours)

        this.model.trees = this.resources.items.trees.scene
        this.model.trees.scale.set(0.4, 0.4, 0.4)
        this.model.trees.position.set(1.5, 0, 1)
        //this.model.trees.rotation.y = - 45 * Math.PI / 180
        this.scene.add(this.model.trees)

        this.model.reussiscours.traverse((child) =>
        {
            child.material = this.material.reussiscours
        })

        this.model.trees.traverse((child) =>
        {
            child.material = this.material.trees
        })
    }

    update()
    {

    }
}