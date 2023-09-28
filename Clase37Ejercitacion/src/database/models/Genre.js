module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genre',
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
        name: {
            type: DataTypes.STRING(100),
            notNull: true,

        },
        ranking: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            notNull: true,
            unique: true
        },
        active: {
            type: DataTypes.TINYINT(1),
            notNull: true,
            defaultValue: 1
        }

    },
    {
        tableName: 'Genres',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Genre;
}