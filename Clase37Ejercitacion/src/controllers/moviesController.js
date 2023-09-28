const path = require('path');
const db = require(path.join(__dirname,'../database/models/index'));
const Op = db.Sequelize.Op;

const controller = {
    list: function(req,res) {
        db.Movie.findAll({raw: true}).then(movies => res.render(path.join(__dirname,'../views/moviesList.ejs'), {movies}));
    },
    detail: function(req,res) {
        db.Movie.findByPk(req.params.id).then(movie => res.render(path.join(__dirname,'../views/moviesDetail.ejs'), {movie}))
    },
    new: function(req,res) {
        db.Movie.findAll({
            order: [
                ['release_date','DESC']
            ]
        })
            .then(movies => res.render(path.join(__dirname,'../views/newestMovies.ejs'), {movies})).catch(err => res.send('Eror'))
    },
    recommended: function(req,res) {
        db.Movie.findAll({
            where: {
                rating: {[Op.gte]: 8}
            },
            order: [
                // ['rating','DESC'],
                ['release_date','DESC']
            ],
            limit: 5,
        })
            .then(movies => res.render(path.join(__dirname,'../views/recommendedMovies.ejs'), {movies})).catch(err => res.send('Error'))
    }
}

module.exports = controller;