const mongoose = require('mongoose');

const RVSchema = new mongoose.Schema({
    listerName: { 
        type: String, 
        required: [ 
            true, 
            "Your name is required"
        ],
        minlength: [
            3,
            "Your name must be at least 3 characters"
        ]
    },
    contactInfo: { 
        type: String, 
        required: [
            true, 
            "Contact Info is required"
        ],
        minlength: [
            3,
            "Contact Info must be at least 3 characters"
        ]
    },
    rvName: { 
        type: String, 
        required: [
            true, 
            "Name of RV is required"
        ],
        minlength: [
            3,
            "Name of RV must be at least 3 characters"
        ]
    },
    rvDescription: { 
        type: String, 
        required: [
            true, 
            "Description of RV is required"
        ],
        minlength: [
            10,
            "Description of RV must be at least 10 characters"
        ]
    },
    mainImageUrl: { 
        type: String, 
        minlength: [
            10,
            "RV Photo URL must be at least 10 characters"
        ]
    },
    price: {},
    rvInfo: {},
    amenities: {},
}, { timestamps: true });

module.exports.RV = mongoose.model('RV', RVSchema);