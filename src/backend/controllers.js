const nodemailer = require('nodemailer')

const controllers = {}

const transporter = nodemailer.createTransport(
{         
    host: '127.0.0.1',
    port: 25,
    secure: false,       
    tls:
    {
        rejectUnauthorized: false
    }    
})

controllers.email = (req, res) =>
{
    if(!req.body.name || !req.body.email || !req.body.message)
    {
        return res.status(400).send({message: 'bad request'})
    }

    const email =
    {
        from: 'noreply@reussiscours.fr',
        to: process.env.EMAIL,
        subject: `REUSSISCOURS de ${req.body.name}`,
        html:
        `
            <p>Nom Prenom: ${req.body.name}</p>
            <p>Email: ${req.body.email}</p>
            <p>Telephone: ${req.body.phone}</p>
            <p>${req.body.message}</p>
        `
    }

    transporter.sendMail(email, (err, info) =>
    {
        if(err)
        {
            return res.status(500).send({message: 'internal error'})
        }
        else
        {
            return res.status(200).send({message: 'message sent'})
        }
    })
}

module.exports = controllers