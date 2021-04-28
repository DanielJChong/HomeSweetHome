const { RV } = require('../models/rv.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createRV = (request, response) => {
    const { listerName, contactInfo, rvName, rvDescription, price, rvInfo, amenities } = request.body;
    RV.create({
        listerName, 
        contactInfo, 
        rvName, 
        rvDescription, 
        price, 
        rvInfo, 
        amenities
    })
        .then(rv => response.json(rv))
        .catch(err => response.status(400).json(err)); 
}

module.exports.getAllRVs = (request, response) => {
    RV.find()
        .then(rvs => response.json(rvs))
        .catch(err => response.json(err))
}

module.exports.getRV = (request, response) => {
    RV.findOne({_id:request.params.id})
        .then(rv => response.json(rv))
        .catch(err => response.json(err))
}

module.exports.updateRV = (request, response) => {
    RV.findById(request.params.id)
        .then((rv) => {
            rv
                .updateOne(request.body, { runValidators: true })
                .then((status) => response.json(status))
                .catch((err) => response.status(400).json(err));
        })
        .catch((err) => {
            console.log(res);
            response.status(400).json(err);
        });
}

module.exports.deleteRV = (request, response) => {
    RV.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}