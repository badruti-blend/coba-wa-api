// const express = require('express')
// const app = express()
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)


try {
    client.messages
        .create({
            mediaUrl: 'https://storage-3656.twil.io/header1.jpg',
            from: 'whatsapp:+14155238886',
            body: 'tes 1234',
            to: 'whatsapp:+628980936892',
            statusCallback: 'https://85ac-124-158-147-178.ap.ngrok.io/status-callback',
        })
        .then(message => console.log(message.sid))
        .catch(error => console.log(error))
} catch (error) {
    console.log(error)
}

// app.get('/', (req, res) => {

// })

// const port = process.env.PORT || 3000
// app.listen(port, console.log(`Listening on port ${port}`))

//https://timberwolf-mastiff-9776.twil.io/demo-reply