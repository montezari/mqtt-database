// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://66.96.227.103:3030')
var topic = 'lastcounter'
var message = 'Dari Mesin 03'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent :', message)
    }, 1000)
})