const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ec7b3837bda286850deccb89de2fb33b&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' °C degrees out. It feels like ' + body.current.feelslike + ' °C degrees out. The UV index is ' + body.current.uv_index 
            + ' with ' + body.current.humidity + '% of humidity.')
        }

    })

}

module.exports = forecast