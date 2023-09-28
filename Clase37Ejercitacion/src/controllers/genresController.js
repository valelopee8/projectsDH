const path = require('path');
const db = require(path.join(__dirname,'../database/models/index'));

const controller = {
    list: function(req,res) {
        db.Genre.findAll().then(genres => res.render(path.join(__dirname,'../views/genresList.ejs'), {genres}))
    },
    detail: function(req,res) {
        db.Genre.findByPk(req.params.id).then(genre => res.render(path.join(__dirname,'../views/genresDetail.ejs'), {genre}))
    }
}

module.exports = controller;