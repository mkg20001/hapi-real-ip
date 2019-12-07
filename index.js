'use strict'

exports.plugin = {
  pkg: require('./package.json'),
  register: (server, options) => {
    server.decorate('request', 'realIp', function () {
      const xFF = this.headers['x-forwarded-for']
      const ip = xFF ? xFF.split(',')[0] : this.info.remoteAddress

      return ip
    })
  }
}
