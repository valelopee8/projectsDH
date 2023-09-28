const path = require('path');
const db = require(path.join(__dirname,'../database/models/index'));
const Op = db.Sequelize.Op;

const controller = {
    list: function(req,res) {
        db.Actor.findAll().then(actors => res.render(path.join(__dirname,'../views/actorsList.ejs'), {actors}))
    },
    detail: function(req,res) {
        db.Actor.findByPk(req.params.id).then(actor => res.render(path.join(__dirname,'../views/actorsDetail.ejs'), {actor}))
    }
}

module.exports = controller;