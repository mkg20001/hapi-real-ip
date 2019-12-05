# hapi-real-ip

Get the real IP of the user

# Usage

```
await server.register(require('hapi-real-ip'))

server.route({
  method: 'GET',
  path: '/ip',
  handler: async (request, h) => {
    return request.realIp()
  }
})
