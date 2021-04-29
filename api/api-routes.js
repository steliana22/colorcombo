// Initialize express router
let router = require('express').Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
  });
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome!',
    });
});
// Import color controller
var colorController = require('./colorController');
// Color routes
router.route('/colors')
    .get(colorController.index)
    .post(colorController.new);
router.route('/colors/:color_id')
    .get(colorController.view)
    .patch(colorController.update)
    .put(colorController.update)
    .delete(colorController.delete);
// Export API routes
module.exports = router;