import '../../assets/css/style.css'
import './index.css'

if(process.env.NODE_ENV === 'development' && module.hot)
{
    module.hot.accept()
}

if (window.innerWidth >= 1300)
{
    import('./Experience/classroom/Experience.js').then((module) =>
    {
        new module.default(document.querySelector('canvas.webgl'))
    })
}

const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay))

window.addEventListener('DOMContentLoaded', () =>
{
    wait(1000).then(() =>
    {
        document.querySelector('#loading').style.display = 'none'
        document.querySelector('#page').style.display = 'grid'
    })
})

document.querySelector('#form .content .input__box input[type="submit"]').addEventListener('click', () =>
{
    //c9f50a8e-d46b-4034-a0ec-fcead4409551
    /*Email.send(
    {
        SecureToken : 'c9f50a8e-d46b-4034-a0ec-fcead4409551',
        To : 'ghyrib@gmail.com',
        From : 'ghyrib@gmail.com',
        Subject : 'TEST',
        Body : 'TEST',
    }).then(message => console.log('mail sent successfully'))*/
})