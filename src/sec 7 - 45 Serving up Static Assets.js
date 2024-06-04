import express from 'express';
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PublicDirectoryPath = path.join(__dirname, '../public');

const app = express()

app.use(express.static(PublicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'India'
    })
})

app.listen(3000, () => {
    console.log('Server is up in port 3000.')
})