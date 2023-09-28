module.exports = (sequelize,DataTypes) => {
    const Actor = sequelize.define('Actor',
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
        first_name: {
            type: DataTypes.STRING(100),
            notNull: true
        },
        last_name: {
            type: DataTypes.STRING(100),
            notNull: true
        },
        rating: {
            type: DataTypes.DECIMAL(3,1),
            defaultValue: null
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        }
    },
    {
        tableName: 'actors',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Actor;
}