const ip = require('ip')
const async = require('async')
const request = require('request')

const myIp = ip.address()
const p = ip.toBuffer(myIp)
const prefix = p[0] + '.' + p[1] + '.' + p[2] + '.'

let allIPs = []

for (let s2 = 1; s2 < 254; s2++) {
  allIPs.push(prefix + s2)
}

module.exports = function(callback, stop_on_first = false) {
  if (typeof callback !== "function") {
    throw Error('Please provide callback function as first argument!')
  }
  let devices = []
  async.forEach(allIPs, function(ip, cb) {
    request('http://' + ip + ':8001/ms/1.0/', function(err, response, body) {
      if(err) {
        return cb()
      }
      let device = JSON.parse(body)
      devices.push({
        id: device.DUID,
        model: device.ModelName,
        network_type: device.NetworkType,
        wifi_ssid: device.SSID,
        ip: device.IP,
        name: device.DeviceName,
        display_resolution: device.Resolution
      })
      if(stop_on_first) {
        return callback(true, devices)
      }
      cb()
    })
  }, function() {
    if(devices.length < 1) {
      callback(false, [])
    } else {
      callback(true, devices)
    }
  })
}