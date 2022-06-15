import '../../assets/css/style.css'
import './index.css'
import Services from '../common/services/services.js'

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


const name = document.querySelector('#name')
const name_error = document.querySelector('#name_error')
const email = document.querySelector('#email')
const email_error = document.querySelector('#email_error')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')
const message_error = document.querySelector('#message_error')
const send = document.querySelector('#send')
const send_success = document.querySelector('#send_success')
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

send.addEventListener('click', () =>
{
    const name_value = name.value
    const email_value = email.value
    const phone_value = phone.value || ''
    const message_value = message.value
    let error = false

    if(!name_value)
    {
        name_error.classList.add('active')

        error = true
    }
    else
    {
        name_error.classList.remove('active')
    }

    if(!email_value.match(mailformat))
    {
        email_error.classList.add('active')

        error = true
    }
    else
    {
        email_error.classList.remove('active')
    }

    if(!message_value)
    {
        message_error.classList.add('active')

        error = true
    }
    else
    {
        message_error.classList.remove('active')
    }

    if(!error)
    {
        Services.email(name_value, email_value, phone_value, message_value).then((response) =>
        {
            if(response.status === 200)
            {
                send.classList.add('inactive')
                send_success.classList.add('active')
            }
        }).catch((error) =>
        {
            
        })
    }
})