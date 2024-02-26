const sequelize = require('../db')

const { DataTypes } = require('sequelize')

const SPK = sequelize.define('spk', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Managers = sequelize.define('managers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_manager: {type: DataTypes.STRING},
    second_manager: {type: DataTypes.STRING},
    order_date: {type: DataTypes.STRING},
    order_num: {type: DataTypes.INTEGER}
})

const Folder = sequelize.define('folder', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    path: {type: DataTypes.STRING}
})

const Section = sequelize.define('section', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const subSection = sequelize.define('subSection', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING}
})

subSection.hasMany(Folder)
Folder.belongsTo(subSection)

subSection.hasMany(SPK)
SPK.belongsTo(subSection)

Managers.hasMany(Folder)
Folder.belongsTo(Managers)

Section.hasMany(SPK)
SPK.belongsTo(Section)

Folder.hasMany(SPK)
SPK.belongsTo(Folder)


module.exports = {
    SPK,
    Managers,
    Folder,
    Section,
    subSection
}