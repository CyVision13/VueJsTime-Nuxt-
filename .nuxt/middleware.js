const middleware = {}

middleware['apiMiddleware'] = require('../middleware/apiMiddleware.js')
middleware['apiMiddleware'] = middleware['apiMiddleware'].default || middleware['apiMiddleware']

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware
