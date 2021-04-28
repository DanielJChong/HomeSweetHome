const RVController = require('../controllers/rv.controller');


module.exports = function(app){
    app.get('/api', RVController.index);
    app.post('/api/rv', RVController.createRV);
    app.get('/api/rv', RVController.getAllRVs);
    app.put('/api/rv/:id', RVController.updateRV);
    app.get('/api/rv/:id', RVController.getRV);
    app.delete('/api/rv/:id', RVController.deleteRV);
    //app.post('/api/rv/:id/likes', RVController.addLikes);
}