const controllers = {}

controllers.email = (req, res) =>
{
    if(!req.body.name || !req.body.email || !req.body.message)
    {
        return res.status(400).send({message: 'bad request'})
    }

    console.log(req.body.name, req.body.email, req.body.phone, req.body.message)

    return res.status(200).send({message: 'message sent'})
}

module.exports = controllers