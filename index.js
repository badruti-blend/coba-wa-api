const express = require('express')
const { message_status_log } = require('./models')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/tes', async (req, res) => {
    const data = await message_status_log.findAll()
    console.log(data)
    res.send('tes')
})

app.post('/status-callback-customer', async (req, res) => {
    let { From, SmsStatus } = req.body
    From = From.substring(9)

    console.log('status pesan customer : ', SmsStatus)

    await message_status_log.create({
        from: From,
        status: SmsStatus
    })

    res.sendStatus(200)
})
app.post('/status-callback', async (req, res) => {
    let { From, To, SmsStatus } = req.body
    From = From.substring(9)
    To = To.substring(9)

    console.log('status pesan admin : ', SmsStatus)

    await message_status_log.create({
        from: From,
        to: To,
        status: SmsStatus
    })

    res.sendStatus(200)
})

const port = process.env.PORT || 3000
app.listen(port, console.log(`Listening on port ${port}`))