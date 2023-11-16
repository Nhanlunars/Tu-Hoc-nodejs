'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dotor_Clinic_Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Dotor_Clinic_Specialty.init({
        doctorId: DataTypes.STRING,
        clinicId: DataTypes.STRING,
        specialtyId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Dotor_Clinic_Specialty',
    });
    return Dotor_Clinic_Specialty;
};