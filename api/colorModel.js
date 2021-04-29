// colorModel.js
var mongoose = require('mongoose');
// Setup schema
var colorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hex: String,
});
// Export Color model
var Color = module.exports = mongoose.model('color', colorSchema);
module.exports.get = function (callback, limit) {
    Color.find(callback).limit(limit);
}