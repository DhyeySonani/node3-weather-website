import express from 'express';
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PublicDirectoryPath = path.join(__dirname, '../public');

const app = express()

app.set('view engine','hbs')
app.set("views",path.join(__dirname,"../views"))

app.use(express.static(PublicDirectoryPath))

app.get('',(req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Dhyey Sonani'
    })
})

app.get('/about',(req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Dhyey Sonani'
    })
})

app.get('/help',(req, res) => {
    res.render('help', {
        HelpText: 'This is some helpful text.'
    })
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