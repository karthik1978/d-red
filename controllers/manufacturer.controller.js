const Manufacturer = require('../models/manufacturer.model');

var data = "Manufacturer's Page..!"

exports.manufacturer_home = function(req, res, next){
    res.send(data);
}
exports.manufacturer_create = function(req, res, next){
    console.log("manufacturer controller Create method");
    console.log('I am here..1 :'+ req.body.active);
    let manufacturer = new Manufacturer(
        {
            name: req.body.name,
            description: req.body.description,
            contractStartDate: req.body.contractStartDate,
            distributionArea: req.body.distributionArea,
            active: req.body.active
        }
    );
    manufacturer.save(function (err) {
        if (err) {
            console.log('I am here..2'+ err);
            return next(err);
        }
        res.send('Manufacturer Created successfully');
    })
    };

exports.manufacturer_read = function(req, res, next){
    console.log("I am at manufacturer Read 1" );
    Manufacturer.findById(req.params.id,function(err, manufacturer){
        if (err){
            console.log("I am at manufacturer Read 2" + err );
            return next(err);
        } 
        res.send(manufacturer);
    })
}
exports.manufacturer_update = function(req, res, next){   
    Manufacturer.findByIdAndUpdate(req.params.id,{$set: req.body},function(err, manufacturer){
        if (err) return next(err);
        res.send("Manufacturer Updated");
    })
}
exports.manufacturer_delete = function(req, res, next){
    Manufacturer.findByIdAndDelete(req.params.id,function(err, manufacturer){
        if (err) {
            console.log("I am at manufacturer delete " + err );
            return next(err);
        } 
        res.send("Manufacturer Deleted Successfully");
    })
}
exports.manufacturer_list = function(req, res, next){
    console.log("I am at manufacturer list 1" );
    Manufacturer.find(function(err, manufacturers){
        console.log("I am at manufacturer list -" + err);
        if (err) {
            console.log("I am at manufacturer List" + err );
            return next(err);
        } 
        res.send(manufacturers);
    })
}