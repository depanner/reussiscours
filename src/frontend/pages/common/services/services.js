import axios from 'axios'

const API_URL = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;

export default class
{
    static email(name, email, phone, message)
    {
        return axios.post(`${API_URL}/api/email`,
        {
            name,
            email,
            phone,
            message
        }).then((response) =>
        {
            return response
        })
    }
}