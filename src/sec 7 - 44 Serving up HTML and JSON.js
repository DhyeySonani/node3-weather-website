import express from 'express';

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Dhyey',
    }, {
        name : 'sara'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'India'
    })
})

app.listen(3000, () => {
    console.log('Server is up in port 3000.')
})