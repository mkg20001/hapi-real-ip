'use strict'

exports.plugin = {
  pkg: require('./package.json'),
  register: (server, options) => {
    server.decorate('request', 'realIp', (request) => {
      const xFF = request.headers['x-forwarded-for']
      const ip = xFF ? xFF.split(',')[0] : request.info.remoteAddress

      return ip
    })
  }
}
