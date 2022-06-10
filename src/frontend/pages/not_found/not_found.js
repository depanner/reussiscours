import '../../assets/css/style.css'
import './not_found.css'
import Experience from './Experience/not_found/Experience.js'

new Experience(document.querySelector('canvas.webgl'))

//import * as THREE from 'three'
//import gsap from 'gsap'
//
//if(process.env.NODE_ENV === 'development' && module.hot)
//{
//    module.hot.accept()
//}
//
//const canvas = document.querySelector('canvas.webgl')
//const scene = new THREE.Scene()
//
///**
// * Sizes
// */
//const sizes = {
//    width: window.innerWidth,
//    height: window.innerHeight
//}
//
///**
// * Cursor
// */
//const cursor = {}
//cursor.x = 0
//cursor.y = 0
//
//window.addEventListener('mousemove', (event) =>
//{
//    cursor.x = event.clientX / sizes.width - 0.5
//    cursor.y = event.clientY / sizes.height - 0.5
//})
//
///**
// * Objects
// */
//// Texture
//const textureLoader = new THREE.TextureLoader()
//const gradientTexture = textureLoader.load('textures/3.jpg')
//gradientTexture.magFilter = THREE.NearestFilter
//
//// Material
//const material = new THREE.MeshToonMaterial({color: '#aaa', gradientMap: gradientTexture})
//
//// Meshes
//const mesh = new THREE.Mesh(
//    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
//    material
//)
//
//scene.add(mesh)
//
//window.addEventListener('click', () =>
//{
//    gsap.to(
//        mesh.rotation,
//        {
//            duration: 1.5,
//            ease: 'power2.inOut',
//            x: '+=6',
//            y: '+=3',
//            z: '+=1.5'
//        }
//    )
//})
//
///**
// * Particles
// */
//// Material
//const particlesMaterial = new THREE.PointsMaterial(
//    {
//        color: '#fff',
//        sizeAttenuation: true,
//        size: 0.03
//    }
//)
//
//// Mesh
//const particlesCount = 200
//const positions = new Float32Array(particlesCount * 3)
//
//for(let i = 0; i < particlesCount; i++)
//{
//    positions[i * 3 + 0] = (Math.random() - 0.5) * 5
//    positions[i * 3 + 1] = (Math.random() - 0.5) * 5
//    positions[i * 3 + 2] = (Math.random() - 0.5) * 5
//}
//
//const particleGeometry = new THREE.BufferGeometry()
//particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//
//const particles = new THREE.Points(particleGeometry, particlesMaterial)
//scene.add(particles)
//
///**
// * Lights
// */
//const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
//directionalLight.position.set(1, 1, 0)
//scene.add(directionalLight)
//
//window.addEventListener('resize', () =>
//{
//    // Update sizes
//    sizes.width = window.innerWidth
//    sizes.height = window.innerHeight
//
//    // Update camera
//    camera.aspect = sizes.width / sizes.height
//    camera.updateProjectionMatrix()
//
//    // Update renderer
//    renderer.setSize(sizes.width, sizes.height)
//    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//})
//
///**
// * Camera
// */
//// Base camera
//const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
//camera.position.z = 6
//scene.add(camera)
//
///**
// * Renderer
// */
//const renderer = new THREE.WebGLRenderer(
//{
//    canvas: canvas,
//    alpha: true
//})
//renderer.setSize(sizes.width, sizes.height)
//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//
///**
// * Animate
// */
//const clock = new THREE.Clock()
//let previousTime = 0
//
//const tick = () =>
//{
//    const elapsedTime = clock.getElapsedTime()
//    const deltaTime = elapsedTime - previousTime
//    previousTime = elapsedTime
//
//    // Animate the mesh
//    mesh.rotation.x += deltaTime * 0.1
//    mesh.rotation.y += deltaTime * 0.12
//
//    const parallaxX = cursor.x * 0.5
//    const parallaxY = - cursor.y * 0.5
//    camera.position.y += (parallaxY - camera.position.y) * 4 * deltaTime
//    camera.position.x += (parallaxX - camera.position.x) * 4 * deltaTime
//
//    // Render
//    renderer.render(scene, camera)
//
//    // Call tick again on the next frame
//    window.requestAnimationFrame(tick)
//}
//
//tick()