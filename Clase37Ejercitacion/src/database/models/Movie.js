const { INTEGER } = require("sequelize")

module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define('Movie',
    {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        title: {
            type: DataTypes.STRING(500),
            notNull: true
        },
        rating: {
            type: DataTypes.DECIMAL(1,3).UNSIGNED,
            notNull: true
        },
        awards: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            notNull: true,
            defaultValue: 0
        },
        release_date: {
            type: DataTypes.DATE,
            notNull: true
        },
        length: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        },
        genre_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        }

    },
    {
        tableName: 'movies',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Movie;
}