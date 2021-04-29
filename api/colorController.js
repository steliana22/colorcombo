
// Import color model
Color = require('./colorModel');
// Handle index actions
exports.index = function (req, res) {
    Color.get(function (err, colors) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Colors retrieved successfully",
            data: colors
        });
    });
};
// Handle create color actions
exports.new = function (req, res) {
    var color = new Color();
    color.name = req.body.name ? req.body.name : color.name;
    color.hex = req.body.hex;
// save the color and check for errors
    color.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New color created!',
            data: color
        });
    });
};
// Handle view color info
exports.view = function (req, res) {
    Color.findById(req.params.color_id, function (err, color) {
        if (err)
            res.send(err);
        res.json({
            message: 'Color details loading..',
            data: color
        });
    });
};
// Handle update color info
exports.update = function (req, res) {
Color.findById(req.params.color_id, function (err, color) {
        if (err)
            res.send(err);
color.name = req.body.name ? req.body.name : color.name;
        color.hex = req.body.hex;
// save the color and check for errors
        color.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Color Info updated',
                data: color
            });
        });
    });
};
// Handle delete color
exports.delete = function (req, res) {
    Color.remove({
        _id: req.params.color_id
    }, function (err, color) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Color deleted'
        });
    });
};