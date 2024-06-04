import request from 'postman-request';

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=8e876b8283d04cecba491256242405&q=' + latitude + ',' + longitude + '&aqi=no';

    request ({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,'It is currently ' + body.current.temp_c + ' degree out. There is a ' + body.current.precip_mm + '% chance of rain')
        }

    })
}

export default forecast