import express from 'express';
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const app = express()

// Define paths for Express configs
const __dirname = dirname(fileURLToPath(import.meta.url));
const PublicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials')

// set up Handlebars and views location
app.set('view engine','hbs')
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory to serve
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
        HelpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Dhyey Sonani'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error:'You must provide an address'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'India',
        address:req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dhyey',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Dhyey Sonani',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up in port 3000.')
})