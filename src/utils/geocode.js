import request from 'postman-request';

const geocode = (address, callback) => {
    const url =  'https://api.geocod.io/v1.7/geocode?q='+ encodeURIComponent(address) +'&api_key=66006616566665636cb66383c68cc81101161a5&limit=1'

    
    request ({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.',undefined)
        } else {
            callback(undefined,{
                latitude: body.results[0].location.lat,
                longitude: body.results[0].location.lng,
                location: body.results[0].address_components.city + ' ' + body.results[0].address_components.state + ' ' + body.results[0].address_components.country

            })
        }
        
    })
}

export default geocode